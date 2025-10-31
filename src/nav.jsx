
import userIcon from "../public/vite.svg"
import './nav.css'

function Nav(){
    return(
        <nav className="nav">
        
            <a href="/" className="Contenedor-Logo">
                <span className="texto-Logo">MDB-PRODE</span> 
            </a>

            <div className="botones-Nav">
                <ul>
                    <li><a href="/">Inicio</a></li> 
                    <li><a href="/">Predicciones</a></li>
                </ul>

                <a href="/">
                    <img className="img-usuario" src={userIcon} alt="Icono de Usuario"></img>
                </a>
            </div>

        </nav>
    );
}

export default Nav;