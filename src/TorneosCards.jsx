import "../src/TorneosCard.css"

function TorneosCards(props) {
    
    const statusClass = `torneos-card-status ${props.estado ? props.estado.toLowerCase().replace(/\s/g, '-') : ''}`;
    return (
        <article className="torneos-card">
            <div className="torneos-card-image-container">
                <img src={props.imgLink} alt={props.titulo} />
            </div>

            <div className="torneos-card-content">
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
            </div>

            <div className="torneos-card-footer">
                <p>{props.fase}</p>
                <span className={statusClass}>{props.estado}</span>
            </div>
        </article>
    );
}


export default TorneosCards;