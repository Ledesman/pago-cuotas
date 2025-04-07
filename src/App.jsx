import React from 'react';
import { SignUp, Login, NotFound, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <>
  <div className='container'>
  <div className='row p-4'>Bienvenido</div>
    <h2>Pago + Cuotas</h2>
    </div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />

  </Routes>
 
  
 </>
  )
  
 
    
}



export default App;