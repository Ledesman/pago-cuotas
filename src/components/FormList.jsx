
import React,{useEffect} from 'react'
import { useForms } from '../context/FormContext'
import {  useNavigate } from 'react-router-dom';


function FormList() {

   let navigate = useNavigate();

const { forms, getForms } = useForms();

useEffect(() =>{
    getForms()
}, [])

function handleList  (e)  {
    e.preventDefault();
    navigate("/add")
}
    console.log(forms);
  return (
    <>
         


      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-700">Lista de clientes.</p>
        <button className="btn btn-outline-success" onClick={handleList}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg></button>
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
                  alta
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><span>{cli.created_at}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              </td>  
                                <a href="#" className="btn btn-outline-warning hover:text-indigo-900"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>Edit</a>
                            
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
