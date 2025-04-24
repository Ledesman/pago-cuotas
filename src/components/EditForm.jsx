//import React,{useEffect} from 'react'
import { useForms } from '../context/FormContext'
//import {  useNavigate } from 'react-router-dom';
function EditForm() {
   
    const { updateForm } = useForms;

    // Example usage of updateForm to avoid the unused variable error
    const handleUpdate = () => {
        updateForm();
    };
  return (
    <div>
        <button onClick={handleUpdate}></button>
      edit

    </div>
  )
}

export default EditForm
