
import paciente from "../../assets/images/paciente.png";
import veterinario from "../../assets/images/veterinario.png";
import vacunacion from "../../assets/images/vacunacion.png";
import Servicio1 from "../../components/servicios/servicio1";

const servicios=[
{
id:1,
imgs:paciente,
title:'Pacientes',
description:'HolaThis is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

},

{
id:2,
imgs:veterinario,
title:'Veterinario',
description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
},

{
id:3,
imgs:vacunacion,
title:'Vacunacion',
description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

}

]


function Sectionserv() {
  return (
  
  <section id="servicios" className="overflow-hidden">

    <h1 className="titulo">Servicios</h1>
    <hr/>
    <div className="row">
{
  servicios.map(serv=>(
      
    <div className="col-12 col-md-4" key={serv.id}>
    < Servicio1 imgsserv={serv.imgs} titulo={serv.title} desc={serv.description}/>
    </div>

    ))
   
}
   
   </div>
   </section>
  );
}

export default Sectionserv;