import React from "react";
import Resizable from "./components/Resizable";
import './App.css';

function App(){ 
 return (
  <div className="App">
   <header className="App-hedaer">
    <h1>Carrusel de imagenes Plegable en React</h1>
   </header>
   <main>
    <Resizable/>
   </main>
  </div>
 );
}

export default App;
