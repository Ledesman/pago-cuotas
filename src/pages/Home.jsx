import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import FormList from '../components/FormList';

const Home = ({token}) => {

    let navigate = useNavigate();
  

    function handleLogout() {
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    return (
  
    <div className="container-fluid">
        <div className='container p-5'>
         <Navbar /> 
        </div>
        
 <div className="g-col-4">
    
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Por salir</button>

<div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header">
    <h5 classn="offcanvas-title" id="offcanvasTopLabel">Listo para salir</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <button className=" btn btn-outline-danger" onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>Salir</button>
  </div>
</div>
    <span>{token.user.user_metadata.name}</span>
    
       
    
   
    </div>
    <div className="container">
       
        <FormList />
    </div>
       
        
</div>
   
    );
}


export default Home;