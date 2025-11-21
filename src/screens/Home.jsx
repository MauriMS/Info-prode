import { use, useState } from 'react'
import Nav from '../nav';
import TorneosCards from '../TorneosCards'
import TorneosHeader from '../TorneosHeader'
import NuevoTorneo from '../NuevoTorneo'
import { useQuery } from '@tanstack/react-query';
import { torneosKeys } from "../queries/torneos.jsx"
import { getAllTorneos } from "../services/torneos.js"
import  "./Home.css"






function Home(){

    
    const {
        data: torneos = [],
        isPending,
        isLoading,
        error,
    }= useQuery({queryKey: torneosKeys.getTorneos(), 
        queryFn: getAllTorneos
    });

    const [nuevoTorneo,setNuevoTorneo] = useState(false)
    const [busqueda, setBusqueda] = useState('');
    const [filtro,setFiltro] = useState({
        estado: "Todos",
        anio: 0
    })

    const filterTorneos = (torneos) =>{
        if (!torneos || !Array.isArray(torneos)) return [];
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
            {isLoading && <p className='carga-api'>Cargando...</p>}
            {error && <p className='carga-api'>{error.message || "Ocurrió un error"}</p>}
            {!error && (
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
            )}
        </div>
    )

}


export default Home;