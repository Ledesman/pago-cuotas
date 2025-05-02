
import React,{useEffect, useState} from 'react'
import { useForms } from '../context/FormContext'
import {  useNavigate } from 'react-router-dom';
import  NotificacionesCli  from '../components/ui/NotificacionesCli';


function FormList() {

   let navigate = useNavigate();
 

const { forms, getForms, loading, deleteForm, updateForm, StateForm } = useForms();
const [formData, setFormData] = useState({
            id: '',
            nombre: '',
            apellido: '',
            montoPagar: '',
            fechaPago: '',
            numerCotas: '',
            mes: '',
            cuota_act: '',
            observacion: '',
            estado: Boolean,
            created_at: new Date(),
            

        });
  
useEffect(() =>{
    getForms()
    
}, [])
if (loading) {
  return <p>Cargando...</p>
}else if(forms.length === 0){
  return <p>No Tenemos cargados clientes ./</p>
 
}

function handleList  (e)  {
    e.preventDefault();
    navigate("/add")
}
    

    const handleDelete = (id) => {
      alert('Eliminando correctamente');
      deleteForm(id);
    }
    function handleStado (userId) {
      
      forms.map((form) =>{
        if (form.id == userId) {
          
          setFormData({
            id: form.id,
            nombre:form.nombre,
            apellido:form.apellido,
            montoPagar:form.montoPagar,
            fechaPago:form.fechaPago,
            numerCotas:form.numerCotas,
            mes:form.mes,
            cuota_act:form.cuota_act,
            observacion:form.observacion,
            estado:form.estado
            
          })
        }

      })
    }

 const handleSubmit = async (e) =>{
    e.preventDefault();
    updateForm(formData.id,{

      nombre: formData.nombre,
      apellido: formData.apellido,
      montoPagar: formData.montoPagar,
      fechaPago: formData.fechaPago,
      numerCotas: formData.numerCotas,
      mes: formData.mes,
      cuota_act: formData.cuota_act,
      observacion: formData.observacion,
      estado: formData.estado,
    })
    
    
    alert('Cliente actualiazado correctamente')
    navigate('/');
  }
    function handleChange(e) {
      setFormData((preventFormdata)=>{
       return {
         ...preventFormdata,
         [e.target.name]: e.target.value
       }
       
      })
     }
  const handleChangeState = () =>{
    StateForm(formData.id, {estado: !formData.estado})
    alert('Cambio de estado del cliente No Activo')
    navigate('/vertodo');
  }

  return (
    <>
         <NotificacionesCli />


      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-700 text-3xl font-bold underline">Lista de clientes</p>
        <button className="btn btn-outline-success" onClick={handleList}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg></button>
      </div>
      {/* <!-- Button trigger modal --> */}
     
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Cliente</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="py-4 flex items-center border-b border-gray-100">
  <label htmlFor="estado" className="w-1/3 text-gray-800 font-medium">
    Estado
  </label>
  <input
    id="estado"
    name='estado'
    type="hidden"
    defaultValue={formData.estado}
    onChange={handleChange}
    className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
  />
 <button onClick={() => handleChangeState()} className='btn btn-outline-light p-2 m-4' data-bs-dismiss="modal">Cambiar-Inactivo</button>
</div>
        <form className="space-y-0" onSubmit={handleSubmit}>

<div className="py-4 flex items-center border-b border-gray-100">
  <input type="text" name='id' onChange={handleChange} defaultValue={formData.id}/>
  <label htmlFor="nombre" className="w-1/3 text-gray-800 font-medium">
  Nombre
  </label>
  <input
    id="nombre"
    type="text"
    className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
    onChange={handleChange}
    name='nombre'
   defaultValue={formData.nombre}
     
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
   defaultValue={formData.apellido}        />
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
    defaultValue={formData.montoPagar}
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
    defaultValue={formData.fechaPago}
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
    defaultValue={formData.numerCotas}
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
    defaultValue={formData.mes}
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
    defaultValue={formData.cuota_act}
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
    defaultValue={formData.observacion}
    onChange={handleChange}
    className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
  />
</div>


      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" className='btn btn-outline-success p-2 m-4 '>Guardar</button>
      </div>
</form>
      </div>
    </div>
  </div>
</div>
      <div className="overflow-hidden border-b border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Nombre y Apellido
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Monto a Pagar
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Fechas de Pago
              </th> 
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
              Numero de Cuotas
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Mes
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Cuota Actual
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                  Fecha de alta
                    </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Observacion
                </th>
              <th scope="col" className="relative px-6 py-3">
                Acciones
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
                {
                    forms.map( cli => (
                        <tr key={cli.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-col --bs-success-border-subtle">
                                    <div className="text-sm font-medium text-gray-900"><span>{cli.nombre}</span></div>
                                    <div className="text-sm text-gray-500">{cli.apellido}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-green-100 text-green-800">
                                    {cli.montoPagar}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.fechaPago}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.numerCotas}</span></td> 
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.mes}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.cuota_act}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.created_at}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.observacion}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleStado(cli.id)} className="btn btn-outline-warning px-6 py-4 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>Editar</button>        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleStado(cli.id)} className="btn btn-outline-light px-6 py-4 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>Editar</button>
                      <button onClick={() => handleDelete(cli.id)}  className="btn btn-outline-danger px-6 py-4 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>Borrar</button>
                              </td>  
                            
                        </tr>
                    ))
                }
          
            
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default FormList
