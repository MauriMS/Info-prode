import Nav from './nav'
import EncabezadoPag from './EncabezadoPag'
import TorneosCards from './TorneosCards'

// Lista de torneos
const torneos = [
    {
        titulo      :"Copa del mundo 2026",
        imgLink     :'./assets/Mundial.jpeg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Proximo",
    },
        
    {
        titulo      :"F1 2026",
        imgLink     :'./assets/f1.webp',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activo",
    },

    {
        titulo      :"Moto Gp 2026",
        imgLink     :'./assets/motoGp.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activo"
    },

    {
        titulo      :"UCL 2026",
        imgLink     :'./assets/ucl.avif',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Inactivo"
    },

    {
        titulo      :"Copa libertadores 2026",
        imgLink     :'./assets/libertadores.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Inactivo"
    },

    {
        titulo      :"Copa libertadores 2026",
        imgLink     :'./assets/libertadores.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activo"
    }
]

function App() {
    return(
    <div>
        <Nav/>
        <EncabezadoPag titulo="Torneos" />
        <div className='contenedorCars'>
            {torneos.map(torneo => (
                <TorneosCards 
                    titulo={torneo.titulo} 
                    imgLink={torneo.imgLink} 
                    descripcion={torneo.descripcion}
                    fase={torneo.fase}
                    estado={torneo.estado}
                />
            ))}
        </div>
    </div>
    );
    
}

export default App;