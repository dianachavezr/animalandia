
import './header.css';


function Modallogin() {
  return (

   <div className="modal fade" id="login" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content1">

      <div className="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <form className="formulario">

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Inicio</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="     Usuario"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="     Contraseña"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Recordarme</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>{alert("oprimiste el boton")}}>Ingresar</button>
  <h1 onClick={()=>{alert("oprimiste el TEXTO")}}>HOLA</h1>
</form>
      </div>
      
    </div>
  </div>
</div>
  );
}


export default Modallogin;





