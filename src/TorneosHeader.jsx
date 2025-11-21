import React, { useState } from 'react';
import './TorneosHeader.css';


const filtros = ['Todos', 'Activos', 'Proximos', 'Inactivos'];

const TorneosHeader = ({setFiltro, estadoActual,busqueda,setBusqueda}) => {
  
  
  

  const handleTabClick = (nombreBtn) => {
    setFiltro(prevState =>({
      ...prevState,
      estado: nombreBtn

      }
    )

    );
    
    
  };

  return (
    <div className="torneos-header-container">
      <div className="title-container">
        <h2 className="torneos-title">Torneos</h2>
      </div>

      
      <div className="controles-pill">
        <div className="buscador-container">
          <svg className="buscador-icon"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>



      {/* Barra de vbusqueda */}
          <input
            type="text"
            className="buscador-input"
            placeholder="Buscar torneos"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>



        {/* Botones */}
        <div className="filtros-container">
          {filtros.map((ActivoBtn) => (
            <button
              key={ActivoBtn}
              className={`filtros-btn 
                ${estadoActual === ActivoBtn ? 'active' : ''} 
                ${estadoActual === ActivoBtn ? `active-${ActivoBtn.toLowerCase()}` : ''}`}
              onClick={() => handleTabClick(ActivoBtn)}
            >
              {ActivoBtn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TorneosHeader;