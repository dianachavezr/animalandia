






import logo from "../../assets/images/logo.jpg";
import iuser from "../../assets/images/usuario.png";
import iuser2 from "../../assets/images/cursor.png";
import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'
import{Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';


class Header extends React.component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render() {
  return (

    <div>
     <img className="logo" src={logo} />  
   
    <div className="`principal">
    <div className="`secundario">
    <button className="btn-blanco"><img src={iuser} width="15px"/>  Registrarse</button>
    <button className="btn-azul"><img src={iuser2} width="15px" onClick={this.abrirModal}/>  Ingresar</button>
     </div></div>
    
    <Modal isOpen={this.state.abierto}>
    <ModalHeader>
    Iniciar Sesion
    </ModalHeader>

    <ModalBody>
    
    <FormGroup>
    <Label for="usuario">Usuario</Label>
    <Input type="text" id="usuario"/>
    </FormGroup>
    
     <FormGroup>
    <Label for="password">Contraseña</Label>
    <Input type="text" id="password"/>
    </FormGroup>


    </ModalBody>

    <ModalFooter>
    </ModalFooter>

    </Modal>
    </div>

    )
  }
}

export default Header;





.principal{
align-items: center;
display: flex;
height: 100vh;
}

.secundario{
  margin: o auto;
}

