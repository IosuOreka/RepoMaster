// 5. Ordenar una lista alfabéticamente
// Dado un array de nombres, usa map para mostrar la lista.
// Agrega un botón que ordene los nombres alfabéticamente.

import React, {useState} from 'react'




const Ejercicio5 = () => {
    const nombres = ["Iosu", "Verónica", "Izaro","Ane","Iker", "Beñat", "Amaia", "Aitor"];

    const [listaNombres, setListaNombres] = useState(nombres);

    const handleOrdenar = () => {
        setListaNombres([...listaNombres].sort((a, b) => a.localeCompare(b)));
    }
    

  return (
    <div>
        <h2>Lista de nombres</h2>
        <button onClick={handleOrdenar}>Ordenar</button>
        <ul>
            {listaNombres.map((nombre, index) => (
                <li key={index}>{nombre}</li>
            ))}
        </ul>
    </div>
  )
}

export default Ejercicio5
