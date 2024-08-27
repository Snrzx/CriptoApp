function Resultado({resultados}){

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE }= resultados

    return(
        <div className="criptoInfo">
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="criptoIMG" className="criptoIMG" />
            <div className="text-white">
                <p className="text-2xl font-bold parrafo">El precio actual es: <span>{PRICE}</span></p>
                <p className="parrafo">El precio más alto alcanzado hoy fue: <span>{HIGHDAY}</span></p>
                <p className="parrafo">El precio más bajo alcanzado hoy fue: <span>{LOWDAY}</span></p>
                <p className="parrafo">Ha variado las últimas 24h: <span>{CHANGEPCT24HOUR}</span></p>
                <p className="parrafo">Última actualización: <span>{LASTUPDATE}</span></p>
            </div>
        </div>
    )
}

export default Resultado