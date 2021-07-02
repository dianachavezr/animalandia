import"./razas.css"
import Modalrazas from "./modalrazas"


function Razas(props) {
  return (
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.pcard2} className="img-fluid rounded-start" alt={props.pcard3}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.pcard3}</h5>
        <p className="card-text">{props.pcard4}</p>
        <button className=" btn btn-blanco" data-bs-toggle="modal" data-bs-target={`#id${props.pcard1}`}>Ver más</button>
      </div>
    </div>
  </div>
  <Modalrazas pm1={`id${props.pcard1}`} pm2={props.pcard3} pm5={props.pcard5} pm6={props.pcard6}/>
</div>
  );
}


export default Razas;

