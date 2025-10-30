import logo from "./assets/logo.png"
import userIcon from "./assets/usuarioIcon.svg"
import './nav.css'



function Nav(){
    return(
        <nav className="nav">
            <a href="/" ><img className="logoImg" src={logo}></img></a>

            <ul>
                <li>Inicio</li>
                <li>Prediciones</li>
            </ul>

            <a href="/"><img className="userImg" src={userIcon}></img></a>

        </nav>
    );
}

export default Nav;