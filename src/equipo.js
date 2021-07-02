import React from 'react';
import ReactDOM from 'react-dom';
import iuser from "./assets/images/calendario.png";
import fotoperro from "./assets/images/golden.jpg";
import './components/equipo/equipo.css';

function Equipo() {
  return (
    
   <div >
      <div className="principal">
      <h2>AGENDA UNA CITA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h2>
      <p className="parrafo">Queremos que conozcas nuestras propuestas de baño para mascotas, donde tenemos espacios dedicados para evitar la contaminación cruzada que puede llegar a existir en nuestra veterinaria. Aplica de lunes a viernes para mascotas que visitan nuestra veterinaria por primera vez <br></br><br></br>

      RECUERDA QUE NUESTRO EQUIPO MEDICO TE CONFIRMARÁ LA CITA<br></br>
      <button className="blanco2"><img src={iuser} width="15px"/>  Agenda</button>
      </p>
      </div>
    
    <div  className="principal2">
    <h3>GRATIS TU PRIMER BAÑO</h3>

      <div className="imagen"><img src={fotoperro} /></div>
     </div>
  </div>
   
  );
}

export default Equipo;