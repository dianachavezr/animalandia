import logo from './logo.svg';
import './App.css';
import Equipo from "./equipo";
import Home from "./pages/home/home";
import Agenda from "./pages/agenda/agenda";
import Sectionserv from "./components/servicios/sectionserv";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Error404 from "./components/error404/error404";
import Perros from "./pages/perros";

import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, Navlink, Redirect} from "react-router-dom";

function App() {
  return (

    <div>
      <div id="container-fluid overflow-hidden"></div>
    <Router>
         <Header />
          <Nav />
         <Switch>
           <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/equipo">
            <Equipo/>
          </Route>
          <Route path="/perros">
            <Perros/>
          </Route>
          <Route  path="/servicios" sensitive>
          <Sectionserv/>
          </Route>
            
          <Route path="/agenda">
            <Agenda/>
            </Route>
          <Route  path="*" component={Error404}/>
       </Switch>
     <Footer />
    </Router>

        </div>
  );
}

export default App;
