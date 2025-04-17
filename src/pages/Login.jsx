import React, { useState} from 'react';
import { supabase } from '../supabase/client';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../image/descarga.jpg";
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

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <img
              alt="Your Company"
              src= {logo}
              className="mx-auto h-10 w-auto"
            />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Bienvenido a tu cuenta
            </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              
        <form className="space-y-6" onSubmit={handleSubmit} >

        <div >
        <label className="block text-sm/6 font-medium text-gray-900" >Correo</label>
        <div className="mt-2">
            <input  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
             type="email" name="email"
             id="email" 
            placeholder='hola@gmail.com'
            onChange={handleChange}
           />
        </div>
        </div>
        <div className="flex items-center justify-between">
            
            <label className="block text-sm/6 font-medium text-gray-900">
              Password</label>
              <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
        </div>
        <div className="mt-2">

            <input  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
             type="password" name="password"
             id="password" 
             onChange={handleChange}/>
        </div>
        
        <br />
            <button className='btn btn-outline-primary justify-between' type="submit">Login</button>
            
        </form>
            </div>
        <br />
        
        <p>No tengo Registro<span><Link to="/signup">Ir_Registrar</Link></span></p>
        </div>
        
       
    </>
  )
  
}

// #endregion

export default Login;