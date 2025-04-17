import React from 'react';
// import logo from "../image/logo.png";
import "../../src/App.css";

const Navbar = () => {
    return(
    <header className="header">
        <a href="/" className="log">Cuotas
        {/* <img
                      alt="Your Company"
                      src= {logo}
                      className=""
                    /> */}</a>
        <nav className="navbar">
            
                {/* <a href="/">Home</a> */}
                <a href="/add">Agregar</a>
                <a href="/vertodo">Ver Todos Bajas</a>
              
           
        </nav>
    </header>
    ) 
}


export default Navbar;