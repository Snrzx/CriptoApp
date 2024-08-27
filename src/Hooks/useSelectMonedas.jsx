import { useState } from "react"

const useSelectMonedas=(h2, opciones)=>{
    
    const [state, setState]= useState('')

    const SelectMonedas=()=>(
        <>
        <h2 className="text-white">{h2}</h2>

        <select value={state} onChange={e=>setState(e.target.value)} className="w-full rounded-lg p-1 text-center my-2">
            <option value="">Seleccione</option>

            {opciones.map( opcion => (

            <option
            key={opcion.id}
            value={opcion.id}>
            {opcion.nombre}
            </option>
        ))}
        </select>

        </>)
        

    return [  state, SelectMonedas ]
}
export default useSelectMonedas