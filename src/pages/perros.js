
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import {perros} from "../components/perros/perros.json"
import Razas from "../components/perros/razas"


function Perros() {
  return (
    <div className="container-fluid">
    <div className="row">
    <h1>Hola Perros</h1>
    {
      perros.map(perro=>(

        <div className="col 12 col md 4" key={perro.id}>
        <Razas pcard1={perro.id} pcard2={perro.thumbnail} pcard3={perro.raza} pcard4={perro.description} pcard5={perro.acercade} pcard6={perro.imagen} />
        </div>
      ))
    }
    </div>
    </div>
  );
}


export default Perros;

