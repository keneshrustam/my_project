import React from 'react';
import '../App.css';
import AppRouter from "./providers/router/ui/AppRouter";
import Nuv from "./providers/router/ui/NavFicha/nuv";

function App() {
  return (
    <div className="App">
        <header style={{width:"100vw", height:"8vh", backgroundColor:"#171717",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Nuv style={{ width:"99.8vw", display:"flex", justifyContent:"center"}}/>
        </header>
        <AppRouter/>
    </div>
  );
}

export default App;
