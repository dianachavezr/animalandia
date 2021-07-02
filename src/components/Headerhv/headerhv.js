
import foto from "../../assets/images/diana.jpg" ;
import './headerhv.css';


function Header() {
  return (
  	<header>
    <div className="texto">
    <h1>DIANA PATRICIA CHAVEZ REALPE</h1>
    <h2>Diseñador Fron End</h2>
    </div>
    <div className="imagen"><img src={foto} /></div>
     </header>
  );
  
}

export default Header;

