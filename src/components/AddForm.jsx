import React ,{useState}from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';


const AddForm = () => {

    let navigate = useNavigate();
        const [formData, setFormData] = useState({
            nombre: '',
            apellido: '',
            montoPagar: 0,
            cuotas: 0,
            numerCotas: '',
            mes: ''
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = supabase.auth.getUser();
            console.log(user);
            const {data, error} = await supabase.from("pagos").insert({
                nombre: formData.nombre,
                apellido: formData.apellido,
                montoPagar: formData.montoPagar,
                cuotas: formData.cuotas,
                numerCotas: formData.numerCotas,
                mes: formData.mes,
                uuid: user.id
            });
            if (error) throw error;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    function handleList  (e)  {
        e.preventDefault();
        navigate("/")
    }

    return (

    <div>
         <div className='container p-4'>
         <button className="btn btn-outline-success" onClick={handleList}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg></button>
        <h1 className="text-3xl font-bold underline">
        Form Clientes
            </h1>
       

        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name='nombre' 
            placeholder='Ingrese nombre'
            onChange={handleChange}
            />

        <label htmlFor="apellido">Apellido</label>
            <input type="text" name='apellido' 
            placeholder='Ingrese apellido'
            onChange={handleChange}
         />

             <label htmlFor="montoPagar">Monto a pagar</label>
            <input type="text" name='montoPagar' 
            placeholder='1000,90'
            onChange={handleChange}
            />

             <label htmlFor="cuotas">Cuotas</label>
            <input type="text" name='cuotas' 
            placeholder='doce'
            onChange={handleChange}/>

 <label htmlFor="numerCotas">Numero de cuotas</label>
            <input type="number" name='numerCotas' 
            placeholder='12'
            onChange={handleChange}/>

             <label htmlFor="mes">Mes</label>
            <input type="text" name='mes' 
            placeholder='Diciembre'
            onChange={handleChange}/>

       <button className='bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 roundeds' type="submit">Agregar</button>
       
        </form>
</div>
    </div>


        

    )
}



export default AddForm;