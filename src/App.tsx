import React from 'react';
import './App.css';
import AppRouter from "./router/ui/AppRouter";
import Nuv from "./router/ui/NavFicha/nuv";

function App() {
  return (
    <div className="App">
        <h2></h2>
        <header style={{width:"100vw", height:"7vh"}}>
            <Nuv style={{height:"10vh", width:"99.8vw", position:"absolute", top:"0", display:"flex", justifyContent:"center"}}/>
        </header>
        <AppRouter/>
    </div>
  );
}

export default App;
