// 11. Transformar datos antes de mostrarlos
// Dado un array de nombres en minúsculas, usa map para capitalizar la primera letra antes de renderizarlos.

import React from 'react'
import { useState } from 'react'

const Ejercicio11 = () => {
    const [lista, setLista] = useState(["iosu", "luis", "vero", "pedro"]);


  return (
    <div>
      <header>
        <h1>RENDERIZADO CON LETRAS CAPITALIZADAS</h1>
      </header>
      <section>
        <ul>
            {
                lista.map((elemento, index) => {
                    return <li key={index}>{elemento.charAt(0).toUpperCase() + elemento.slice(1)}</li>
                })
            }
        </ul>
      </section>
    </div>
  )
}

export default Ejercicio11
