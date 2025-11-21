import React, { useState } from 'react';
import './NuevoTorneo.css';

const NuevoTorneo = ({ cerrarModal }) => {
  
  
  const [TorneoNuevo, setTorneoNuevo] = useState({
    titulo: '',
    imgLink: '',
    descripcion: '',
    fase: '',
    estado: 'Proximo'
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTorneoNuevo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a guardar:", TorneoNuevo);
    
    
    cerrarModal(); 
  };

  return (
    
    <div className="modal-overlay" onClick={cerrarModal}>
      
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="btn-cerrar" onClick={cerrarModal}>×</button>
        
        <h2 className='modal-tittle'>Nuevo Torneo</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grupo">
            <label>Título del Torneo</label>
            <input 
              type="text" 
              name="titulo"
              value={TorneoNuevo.titulo}
              onChange={handleChange}
              required 
              placeholder="Ej: Copa Mundial 2026"
            />
          </div>

          <div className="form-grupo">
            <label>Link de Imagen</label>
            <input 
              type="text" 
              name="imgLink"
              value={TorneoNuevo.imgLink}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-grupo">
            <label>Descripción</label>
            <input 
              type="text" 
              name="descripcion"
              value={TorneoNuevo.descripcion}
              onChange={handleChange}
              placeholder="Inicia en "
            />
          </div>
        <div className="form-grupo">
            <label>Fase</label>
            <input 
              type="text" 
              name="fase"
              value={TorneoNuevo.fase}
              onChange={handleChange}
              placeholder="Fase de grupos"
            />
          </div>

          <div className="form-grupo">
            <label>Estado</label>
            <select name="estado" value={TorneoNuevo.estado} onChange={handleChange}>
              <option value="Activo">Activo</option>
              <option value="Proximo">Próximo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Crear Torneo</button>
        </form>
      </div>
    </div>
  );
};

export default NuevoTorneo;