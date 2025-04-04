import { useState } from "react"

function App(){

  const [nome, setNome ] = useState('Rodrigo')
 
  const Formulario = () => {

    return (
      <>
        <h3>Formulário</h3>
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
    </button>  </>
    )
  }

  return (

    <div>
    <h3>Pizzaria 2D</h3>

    <Formulario />
    <Formulario />
    <Formulario />
    <Formulario />

    </div>
    
  )
}

export default App
