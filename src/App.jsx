import { useState } from "react"

function App(){

  const [nome, setNome ] = useState('Rodrigo')
  return (

    <div>
    <h3>Pizzaria 2D</h3>

    <input
    className="nome"
    onChange={(e) =>{setNome(e.target.value)}}
    typer="text"
    />

    <button
    className="botao"
    onClick={()=>{alert(nome)}}
    >
      Clique aqui
    </button>
    </div>
    
  )
}

export default App
