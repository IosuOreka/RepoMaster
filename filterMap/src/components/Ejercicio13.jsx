// 13. Lista de usuarios con estado de conexión
// Dado un array de usuarios con isOnline: true/false, 
// usa map para mostrar un círculo verde si están en línea y rojo si no.


// import React from 'react'

// const Ejercicio13 = () => {

//     let usuarios = [{nombre: "Iosu", lastname:"Gómez", isOnline: false},
//                     {nombre: "Karla", lastname:"Taopanta", isOnline: true},
//                     {nombre: "Jon", lastname:"Irueta", isOnline: false},
//                     {nombre: "Amaia", lastname:"Rubio", isOnline: true},
//                     {nombre: "Manal", lastname:"Serrar", isOnline: true},]
//   return (
//     <div>
//       <h3>LISTADO DE GENTE ACTIVA</h3>
//         <ul>
//             {usuarios.map((usuario, index) => {
//             return (
//                 <li key={index}>
//                 {usuario.nombre} {usuario.lastname} {usuario.isOnline ? <span style={{color: "green"}}>Activo</span> : <span style={{color: "red"}}>Inactivo</span>}
//                 </li>
//             )
//             })}
//         </ul>
//     </div>
//   )
// }

// export default Ejercicio13

import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  List,
  ListItem,
  Avatar,
  Typography,
  CircularProgress
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Ejercicio13.css';

const Ejercicio13 = () => {
  // Inicializamos la lista de usuarios con la propiedad 'img' nula.
  const [usuarios, setUsuarios] = useState([
    { nombre: "Iosu", lastname: "Gómez", isOnline: false, img: null },
    { nombre: "Karla", lastname: "Taopanta", isOnline: true, img: null },
    { nombre: "Jon", lastname: "Irueta", isOnline: false, img: null },
    { nombre: "Amaia", lastname: "Rubio", isOnline: true, img: null },
    { nombre: "Manal", lastname: "Serrar", isOnline: true, img: null }
  ]);
  const [loading, setLoading] = useState(true);

  // Clave API proporcionada para Pexels
  const pexelsAPIKey = "jb232dnUyXcGpQ49eLoNsFIfAB4It5qkh6Yas3KxB0DukGFlKpm7rl1p";

  useEffect(() => {
    // Realizamos una búsqueda de 5 imágenes de "people"
    fetch('https://api.pexels.com/v1/search?query=people&per_page=5', {
      headers: {
        Authorization: pexelsAPIKey
      }
    })
      .then(response => response.json())
      .then(data => {
        const fotos = data.photos;
        // Se asigna cada foto a cada usuario (en el mismo orden)
        const usuariosConImagen = usuarios.map((usuario, index) => ({
          ...usuario,
          img: fotos[index] ? fotos[index].src.medium : null
        }));
        setUsuarios(usuariosConImagen);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener imágenes de Pexels:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container className="container">
      <Typography variant="h4" className="header" align="center" gutterBottom>
        Listado de Gente Activa
      </Typography>
      <List className="user-list">
        {usuarios.map((usuario, index) => (
          <ListItem key={index} className="user-item">
            <Box display="flex" alignItems="center" width="100%">
              <Avatar
                src={usuario.img}
                alt={`${usuario.nombre} ${usuario.lastname}`}
                className="avatar"
              />
              <Box ml={2} className="user-details">
                <Typography variant="subtitle1" className="user-name">
                  {usuario.nombre} {usuario.lastname}
                </Typography>
                <Box display="flex" alignItems="center" className="status">
                  <FiberManualRecordIcon
                    sx={{ color: usuario.isOnline ? 'green' : 'red', fontSize: 14, mr: 1 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {usuario.isOnline ? "Activo" : "Inactivo"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Ejercicio13;
