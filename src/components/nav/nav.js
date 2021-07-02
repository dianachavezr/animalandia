import './nav.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, NavLink, Redirect} from "react-router-dom";

function Nav() {
  return (
   
    <div>
  	<nav>
    <ul className="menu">
    <li className="item"><Link to="/">Home</Link></li>
    <li className="item"><NavLink to="/equipo" activeClassName="active">Equipo</NavLink></li>
    <li className="item"><NavLink to="/perros" activeClassName="active">Perros</NavLink></li>
    <li className="item"><NavLink to="/servicios" activeClassName="active">Servicios</NavLink></li>
    <li className="item"><a href="/agenda">Agenda tu cita</a></li>
    <li className="item"><a href="#">Contactanos</a></li>
    </ul>

    </nav>
    </div>
   

  );
}

export default Nav;
