import React from 'react';
import ReactDOM from 'react-dom';

import './servicio1.css';

function Servicio1(props) {
  return (
  
    <div className="card">

    <div className="card-body">
      <img src={props.imgsserv} className= "img-fluid" alt="..."/>
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>

   
  );
}

export default Servicio1;