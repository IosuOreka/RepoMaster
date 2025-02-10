// 9. Mostrar elementos únicos
// Dado un array con nombres repetidos, usa filter para eliminar duplicados antes de renderizar.

import { useState } from 'react';

const Ejercicio9 = () => {
    const data = ["Iosu", "Iosu", "Vero", "Vero"];
    const [nombres, setNombres] = useState([...new Set(data)]);

    return (
        <div>
            <h2>Lista de elementos sin duplicar antes de representar</h2>
            <ul>
                {nombres.map((nombre, index) => (
                    <li key={index}>{nombre}</li> 
                ))}
            </ul>
        </div>
    );
};

export default Ejercicio9;
