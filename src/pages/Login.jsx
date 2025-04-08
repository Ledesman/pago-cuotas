import React, { useState} from 'react';
import { supabase } from '../supabase/client';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className='container text-center p-4'>

        <h1 className="card-title">Login</h1>
        <div className="row align-items-start">
        
            

            
        <form className="card-body g-3" onSubmit={handleSubmit} >

        <div className="col">
            <label className="form-label" >Correo</label>
            <input className="form-control" type="email" name="email"
             id="email" 
            placeholder='hola@gmail.com'
            onChange={handleChange}
           />
        </div>
        <div className="col">
            <br />
            <label className="form-label">Password</label>
            <input className="form-control" type="password" name="password"
             id="password" 
             onChange={handleChange}/>
        </div>
        <br />
            <button className='btn btn-outline-primary' type="submit">Login</button>
        </form>
        <br />
        <br />
        <p>No tengo Registro<span><Link to="/signup">Ir_Registrar</Link></span></p>
        </div>
        </div>
       
    </>
  )
  
}

// #endregion

export default Login;