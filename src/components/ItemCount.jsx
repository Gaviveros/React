import { useState } from "react"

function ItemCount() {

    const [count, modificarCount] = useState(0)
  
    function  Agregar(){
      modificarCount(count + 1)
    }

    function  Quitar(){
        modificarCount(count - 1)
      }

    if (count  >= 10) {
      let suma = document.getElementById('suma')
      suma.style.display = 'none'
    }
  
    return (
      <>
          <h2>El número es: {count}</h2>
          <button id="suma" onClick={Agregar}>Sumar</button>
          <button onClick={Quitar}>Restar</button>
      </>
    )
  }
  
  export default ItemCount