import "../src/TorneosCard.css"

function TorneosCards(props) {
    // Uso el operador ternario para cambiar el color de los estados
    const estadoCSS = `torneos-cardEstado ${props.estado ? props.estado.toLowerCase() : ''}`;
    return (
        <article className="torneos-card">
            <div className="torneos-card-img">
                <img src={props.imgLink} alt={props.titulo} />
            </div>

            <div className="torneos-card-imgContent">
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
            </div>

            <div className="torneos-cardFooter">
                <p>{props.fase}</p>
                <span className={estadoCSS}>{props.estado}</span>
            </div>
        </article>
    );
}


export default TorneosCards;