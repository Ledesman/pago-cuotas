import React ,{useState}from 'react';
import { supabase } from '../supabase/client';


const AddForm = () => {

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

    return (

    <div>
         <div className='container p-4'>
        
        <h1 class="text-3xl font-bold underline">
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