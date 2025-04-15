import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import notFunt from "../image/notFuond.jpg";

const Nofound = () => {
    return (
    
    <div>
         <h2 className="">Pagina no Encontrada !!!</h2>
              <p>Buscando...</p>
              <img src={notFunt} alt="" className="mx-auto h-60 w-auto"/>
              <p>Dirijete a inicio <span><Link to="/login">Inicio</Link></span></p>
    </div>

    )
}

export default Nofound;