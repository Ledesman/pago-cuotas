
import React,{useEffect} from 'react'
import { useForm } from '../context/FormContext'


function FormList() {

const { Forms, getForms } = useForm();

useEffect(() =>{
    getForms()
}, [])
    console.log(getForms);
  return (
    <div>
      Lista de clientes
    </div>
  )
}

export default FormList
