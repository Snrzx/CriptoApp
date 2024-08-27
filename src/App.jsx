import { useEffect, useState } from 'react'
import icono from './img/imagen-criptos.png'
import Formulario from './components/formulario'
import Resultado from './components/resultado'
import Spin from './components/spin'
function App() {
  // Apartado de variables
  const [monedas, setMonedas]= useState({})
  const [resultados, setResultado]= useState({})
  const [loading, setLoading]= useState(false)

  //Función que revisa si monedas tiene algo, en caso de ser así, espera que el componente cargue para mostrar resultados.
  useEffect(()=>{
    if(Object.keys(monedas).length> 0 ){
      const cotizarCripto= async()=>{
        setLoading(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta= await fetch(url)
        const resultado= await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setLoading(false)
      }
      cotizarCripto()

    }
  },[monedas])

  return (
    <>
      <div className='principal'>
        <div className='mitadIzquierda'>
        <img src={icono} alt="icono" />
        </div>
        <div className='mitadDerecha'>
          <h1 className='titulo'>
            cotiza criptomonedas al <span className='border-b border-b-indigo-900 grid mx-[30%] mb-6'>instante</span>
          </h1>
          <Formulario setMonedas={setMonedas} />

          {loading && <Spin />}
          {resultados.PRICE && <Resultado resultados={resultados}/>}
        </div>
      </div>
    </>
  )
}

export default App
