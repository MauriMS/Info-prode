import { use, useState } from 'react'
import Nav from './nav'
import TorneosCards from './TorneosCards'
import TorneosHeader from './TorneosHeader'
import NuevoTorneo from './NuevoTorneo'

// Lista de torneos
const torneos = [
    {
        id          :1,
        titulo      :"Copa del mundo 2026",
        imgLink     :'Mundial.jpeg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Proximos",
        link        :"#",
    },
        
    {
        id          :2,
        titulo      :"F1 2026",
        imgLink     :'f1.webp',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activos",
        link        :"#",
    },

    {
        id          :3,
        titulo      :"Moto Gp 2026",
        imgLink     :'motoGp.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activos",
        link        :"#",
    },

    {   
        id          :4,
        titulo      :"UCL 2026",
        imgLink     :'ucl.avif',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Inactivos",
        link        :"#",
    },

    {
        id          :5,
        titulo      :"Copa libertadores 2026",
        imgLink     :'libertadores.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Inactivos",
        link        :"#",
    },

    {
        id          :6,
        titulo      :"Copa libertadores 2026",
        imgLink     :'libertadores.jpg',
        descripcion :"Inicia Junio 2026",
        fase        :"Fases de grupos",
        estado      :"Activos",
        link        :"#",
    }
]

function App() {

    const [nuevoTorneo,setNuevoTorneo] = useState(false)
    const [busqueda, setBusqueda] = useState('');
    const [filtro,setFiltro] = useState({
        estado: "Todos",
        anio: 0
    })

    const filterTorneos = (torneos) =>{

        if (filtro.estado == "Todos"){ return torneos

        }else{
        
            return torneos.filter(torneo =>{
            return(
                torneo.estado == filtro.estado)
        })
        }
        
    }

    const torneosFiltrados = filterTorneos(torneos)
    console.log(torneosFiltrados);
    

    return(
    <div>
        <Nav setNuevoTorneo={setNuevoTorneo}/>
        {nuevoTorneo && (
            <NuevoTorneo cerrarModal={() => setNuevoTorneo(false)} />
        )}
        <TorneosHeader setFiltro={setFiltro} estadoActual={filtro.estado} busqueda={busqueda} setBusqueda={setBusqueda}/>
        <div className='contenedorCars'>
            {torneosFiltrados.map(torneo => (
                <TorneosCards
                    key ={torneo.id}
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