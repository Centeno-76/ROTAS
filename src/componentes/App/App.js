import React from "react"
import './App.css';
import { Route, Switch} from 'react-router'

import Header from "../Header/Header.js";
import Chevrolet from "../Chevrolet/Chevrolet.js";
import Fiat from "../Fiat/Fiat.js";
import Ford from "../Ford/Ford.js";
import Home from "../Home/Home.js";
import Hyundai from "../Hyundai/Hyundai.js";
import Vw from "../Vw/Vw.js";

import Brasilia from '../Vw/Modelos/Brasilia/Brasilia'
import Fusca from '../Vw/Modelos/Fusca/Fusca'
import Gol from '../Vw/Modelos/Gol/Gol'
import Kombi from '../Vw/Modelos/Kombi/Kombi'
import Polo from '../Vw/Modelos/Polo/Polo'

import Mecanica from '../Vw/Modelos/Brasilia/Content/Mecanica'
import Eletrica from '../Vw/Modelos/Brasilia/Content/Eletrica'
import Eletronica from '../Vw/Modelos/Brasilia/Content/Eletronica'
import Suspensao from '../Vw/Modelos/Brasilia/Content/Suspensao'

import Motor from '../Vw/Modelos/Brasilia/Content/Engine/Motor'
import Pedais from '../Vw/Modelos/Brasilia/Content/Engine/Pedais'
import Cambio from '../Vw/Modelos/Brasilia/Content/Engine/Cambio'
import Volante from '../Vw/Modelos/Brasilia/Content/Engine/Volante'
import Sensores from '../Vw/Modelos/Brasilia/Content/Engine/Sensores'

function App() {
  return (
    <div>

      <Header />

      <main>
        <Switch>
        <Route exact path = "/" render = {(props) => <Home/>}></Route>
        <Route exact path = "/chevrolet" render = {(props) => <Chevrolet/>}></Route>
        <Route exact path = "/fiat" render = {(props) => <Fiat/>}></Route>
        <Route exact path = "/ford" render = {(props) => <Ford/>}></Route>
        <Route exact path = "/vw" render = {(props) => <Vw/>}></Route>
        <Route exact path = "/hyundai" render = {(props) => <Hyundai/>}></Route>


        <Route exact path = "/vw/brasilia" render = {(props) => <Brasilia/>}></Route>
        <Route exact path = "/vw/fusca" render = {(props) => <Fusca/>}></Route>
        <Route exact path = "/vw/gol" render = {(props) => <Gol/>}></Route>
        <Route exact path = "/vw/kombi" render = {(props) => <Kombi/>}></Route>
        <Route exact path = "/vw/polo" render = {(props) => <Polo/>}></Route>

        <Route exact path = "/vw/brasilia/mecanica" render = {(props) => < Mecanica/>}></Route>
        <Route exact path = "/vw/brasilia/mecanica/motor" render = {(props) => < Motor/>}></Route>
        <Route exact path = "/vw/brasilia/mecanica/pedais" render = {(props) => < Pedais/>}></Route>
        <Route exact path = "/vw/brasilia/mecanica/cambio" render = {(props) => < Cambio/>}></Route>
        <Route exact path = "/vw/brasilia/mecanica/volante" render = {(props) => < Volante/>}></Route>
        <Route exact path = "/vw/brasilia/mecanica/sensores" render = {(props) => < Sensores/>}></Route>
        
        <Route exact path = "/vw/brasilia/eletrica" render = {(props) => < Eletrica/>}></Route>
        <Route exact path = "/vw/brasilia/eletronica" render = {(props) => < Eletronica/>}></Route>
        <Route exact path = "/vw/brasilia/suspensao" render = {(props) => < Suspensao/>}></Route>


      
        </Switch>
      </main>
     
    </div>
  );
}

export default App;
