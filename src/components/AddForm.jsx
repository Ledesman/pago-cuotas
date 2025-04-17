import React ,{useState}from 'react';

import { useNavigate } from 'react-router-dom';
import { useForms } from '../context/FormContext';
import Navbar from '../components/Navbar';
const AddForm = () => {
    
    

    let navigate = useNavigate();
    const { createForm } = useForms();
        const [formData, setFormData] = useState({
            nombre: '',
            apellido: '',
            montoPagar: 0,
            fechaPago: '',
            numerCotas: 0,
            mes: '',
            cuota_act: 0,
            

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
      createForm(formData);
        alert("Cliente agregado con exito")
        navigate("/")
    }
    function handleList  (e)  {
        e.preventDefault();
        navigate("/")
    }

    return (
      <div className='container p-5'>
       
        <Navbar />
      

      
         <div className='container p-5'>
         <button className="btn btn-outline-success" onClick={handleList}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg></button>
        <h1 className="text-3xl font-bold underline">
        Formulario de Clientes
            </h1>
            <div className="max-w-3xl mx-auto p-6">

        <form className="space-y-0" onSubmit={handleSubmit}>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="nombre" className="w-1/3 text-gray-800 font-medium">
          Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            onChange={handleChange}
            name='nombre'
             placeholder='Ingrese nombre'
          />
        </div>
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="apellido" className="w-1/3 text-gray-800 font-medium">
          Apellido
          </label>
          <input
            id="apellido"
            type="text"
            name='apellido'
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            onChange={handleChange}
            placeholder='Ingrese apellido'         />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="montoPagar" className="w-1/3 text-gray-800 font-medium">
          Monto a pagar
          </label>
          <input
            id="montoPagar"
            type="number"
            name='montoPagar'
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            placeholder='1000,90'
            onChange={handleChange}
         />
        </div>
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="fechaPago" className="w-1/3 text-gray-800 font-medium">
          Fecha de pago
          </label>
          <input
            id="fechaPago"
            type="text"
            name='fechaPago'
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            placeholder='1 al 10'
            onChange={handleChange}
         />
        </div>
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="numerCotas" className="w-1/3 text-gray-800 font-medium">
          Numero de cuotas
          </label>
          <input
            id="numerCotas"
            name='numerCotas' 
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            placeholder='12'
            onChange={handleChange}
         />
          </div>
          <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="mes" className="w-1/3 text-gray-800 font-medium">
          Mes
          </label>
          <input
            id="mes"
            type="text"
            name='mes'
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
            placeholder='Diciembre'
            onChange={handleChange}
         />
        </div>
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="cuota_act" className="w-1/3 text-gray-800 font-medium">
            Cuota Actual
          </label>
          <input
            id="cuota_act"
            name='cuota_act'
            type="number"
            placeholder='1'
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="observacion" className="w-1/3 text-gray-800 font-medium">
            Observacion
          </label>
          <input
            id="observacion"
            name='observacion'
            type="text"
            placeholder='Ingrese observacion'
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">

       <button className='btn btn-outline-success p-2 m-4 ' type="submit">Agregar</button>
        </div>
        </form>

            </div>

</div>
    </div>


        

    )
}



export default AddForm;