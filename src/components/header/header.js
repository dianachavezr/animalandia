
import logo from "../../assets/images/logo.jpg";
import iuser from "../../assets/images/usuario.png";
import iuser2 from "../../assets/images/cursor.png";
import './header.css';
import Modallogin from'./modalinicio';

function Header() {
  return (

  	<header className="row1 align  items-center text-center text-md-start">
    <div className="logo">
    <img className="img-fluid" src={logo} />   
    </div>


     <div id="botones">
    <button className="btn-blanco"><img src={iuser} width="15px"/>  Registrarse</button>
    <button className="btn-azul" data-bs-toggle="modal" data-bs-target="#login"><img src={iuser2} width="15px" />  Ingresar</button>
    </div>
    <Modallogin/> 
     </header>
    
    
  );
}


export default Header;

