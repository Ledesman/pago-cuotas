import React, { useState} from 'react';
import { supabase } from '../supabase/client';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../image/logotzt.jpg";
import "../App.css"



const Login = ({setToken}) => {
let navigate = useNavigate();

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
}); 

console.log(formData);


function handleChange(e) {
 setFormData((preventFormdata)=>{
  return {
    ...preventFormdata,
    [e.target.name]: e.target.value
  }
  
 })
}
 async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } =  await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
        
      })
      if (error)  throw error;
      console.log(data);
      setToken(data)
      // Guardar el token en sessionStorage
    navigate('/')
    
    } catch (error) {
      alert( error);
    }
   

  }

  return(
    <>

<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
<div className="w-full max-w-md space-y-8">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Bienvenido a tu cuenta
            </h2>
        
        <img
              alt="Your Company"
              src= {logo}
              className="mx-auto h-10 w-auto"
               width={50} height={50}
            />
       
        
        <div className="mt-12 space-y-6"></div>
        <form className="space-y-6" onSubmit={handleSubmit} >
        
        <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-900">Correo</label>
        
            <input  className="w-full h-14 px-4 rounded-md border border-gray-300"
             type="email" name="email"
             id="email" 
            placeholder='hola@gmail.com'
            onChange={handleChange}
           />
        </div>
        <div className="space-y-2">
            
            <label className="block text-sm font-medium text-gray-900">
            Contraseña
            </label>
              
            <input  className="w-full h-14 px-4 rounded-md border border-gray-300"
             type="password" name="password"
             id="password" 
             onChange={handleChange}/>
        </div>
        <div className="flex justify-end mb-6">
            <Link to="/signup" className="text-blue-500 text-sm hover:underline">
            No tengo Registro
            </Link>
          </div>
      
        <br />
            <button className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors' type="submit">Iniciar sesion</button>
            
        </form>
     </div>
      </div>
       
    </>
  )
  
}

// #endregion

export default Login;