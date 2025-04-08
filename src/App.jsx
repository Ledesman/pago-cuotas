import React,{useEffect, useState} from 'react';
import { SignUp, Login, NotFound, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
   
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
    
      setToken(data)
    }
  }, [])

  return (
  <>
  <div className='container'>
  <div className='row p-4'>Bienvenido</div>
    <h2>Pago + Cuotas</h2>
    </div>
  <Routes>
    {token?<Route path="/" element={<Home token={token} />} />:""}
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login  setToken={setToken}/>} />
    <Route path="*" element={<NotFound />} />

  </Routes>
 
  
 </>
  )
  
 
    
}



export default App;