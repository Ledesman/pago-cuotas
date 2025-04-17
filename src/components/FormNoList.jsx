
import React,{useEffect} from 'react'
import { useForms } from '../context/FormContext'
import {  useNavigate } from 'react-router-dom';


function FormNoList() {

   let navigate = useNavigate();

const { forms, getFormsFalse } = useForms();

useEffect(() =>{
  getFormsFalse()
}, [])

function handleList  (e)  {
    e.preventDefault();
    navigate("/")
}
    console.log(forms);
  return (
    <>
         


      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-700">Bajas de clientes.</p>
        <button className="btn btn-outline-success" onClick={handleList}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
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

export default FormNoList
