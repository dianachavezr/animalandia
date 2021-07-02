import React from 'react';
import ReactDOM from 'react-dom';

import paciente from "./assets/images/paciente.png";
import veterinario from "./assets/images/veterinario.png";
import vacunacion from "./assets/images/vacunacion.png";
import './components/servicios/Servicios.css';

function Servicios() {
  return (
  
    <div>

     <h1>Servicios</h1>
     <hr></hr>
   <div className="col">
    <div className="card">
      <div classNameName="imagen"><img src={paciente} /></div>
      <div className="card-body">
        <h5 className="card-title">Atención 24/7</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card">
      <div classNameName="imagen"><img src={veterinario} /></div>
      <div className="card-body">
        <h5 className="card-title">Servicio médico</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div classNameName="imagen"><img src={vacunacion} /></div>
      <div className="card-body">
        <h5 className="card-title">Vacunación</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
      </div>
    </div>
  </div>
  </div>



   
  );
}

export default Servicios;