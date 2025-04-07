import React, { useState} from 'react';
import { supabase } from '../supabase/client';
import { Link } from 'react-router-dom';
import "../App.css"


const SignUp = () => {

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
      const { data, error } =  await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          }
        }
      })
      if (error)  throw error;
      console.log(data);
      alert('Usuario registrado correctamente, por favor verifica tu correo');
    } catch (error) {
      alert( error);
    }
   

  }

  return(
    <>
        <div className='container p-4'>
        <h1>Registarse</h1>
        <form className="row g-3" onSubmit={handleSubmit} >
        <div className="col-md-6">
            <label className="form-label" >Nombre</label>
            <input className="form-control" type="text" name="name" 
            id="name" placeholder='Nombre completo' 
           onChange={handleChange} />
        </div>
        <div className="">
            <label className="form-label" >Correo</label>
            <input className="form-control" type="email" name="email"
             id="email" 
            placeholder='hola@gmail.com'
            onChange={handleChange}
           />
        </div>
        <div className="col-md-6">
            <br />
            <label className="form-label">Password</label>
            <input className="form-control" type="password" name="password"
             id="password" 
             onChange={handleChange}/>
        </div>
            <button className='btn btn-outline-info' type="submit">Ingresar</button>
        </form>
        <p>Ya tengo registro quiero ir al <span><Link to="/login">Ir_a_Login</Link></span></p>
        </div>
    </>
  )
  
}

// #endregion

export default SignUp;