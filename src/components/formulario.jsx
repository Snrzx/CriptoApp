import { useEffect, useState } from "react"
import useSelectMonedas from "../Hooks/useSelectMonedas"
import { monedas } from '../data/monedas.js'
import Error from "./error.jsx"
function Formulario({setMonedas}){
    const [criptos, setCriptos] =useState([])
    const [error, setError] =useState(false)

    const [ moneda, SelectMonedas ]= useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCripto ]= useSelectMonedas('Elige tu Critpo Moneda', criptos)
    
    useEffect(()=>{
        const consultarAPI= async()=>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const respuesta = await fetch(url)
        const resultado= await respuesta.json()
        const arrayCriptos= resultado.Data.map( cripto =>{ 
            const objeto= {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objeto
        })
        setCriptos(arrayCriptos)
        }
        consultarAPI()
    },[])

    const handleSubmit=e=>{
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({moneda, criptomoneda})
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="mx-auto">
                {error && <Error>Todos los campos son obligatorios</Error>}
                <SelectMonedas />
                <SelectCripto />
                <input className="text-white mt-2 bg-indigo-500 hover:bg-indigo-900 boton"
                 type="submit"
                 value='cotizar'
                />
            </form>
        </div>
    )

}

export default Formulario