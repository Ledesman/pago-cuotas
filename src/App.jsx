import React,{useEffect, useState} from 'react';
import { SignUp, Login, NotFound, Home } from './pages';
import AddForm from './components/AddForm';
import NoList from './components/FormNoList';
import EditForm from './components/EditForm';
import Pagos from './components/PagosForm'
import { Routes, Route } from 'react-router-dom';
import { FormContextProvider } from './context/FormContext';
import { ClientContextProvider } from './context/ClienteContext';
import './App.css';


const App = () => {

  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
   
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
    
      setToken(data)
    }
  }, [])

  return (
  <>
 
  
   
    <FormContextProvider>
    <ClientContextProvider>

  <Routes>
    {token?<Route path="/" element={<Home token={token} />} />:""}
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login  setToken={setToken}/>} />
    <Route path="*" element={<NotFound />} />
    <Route path='/add' element={<AddForm /> }/>
    <Route path='/vertodo' element={<NoList />} />
    <Route path='/edit' element={<EditForm /> } />
    <Route path='/pagos' element={<Pagos /> } />
  

  </Routes>

    </ClientContextProvider>

    </FormContextProvider>
 
  
 </>
  )
  
 
    
}



export default App;