import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddForm from '../components/AddForm';


const Home = ({token}) => {

    let navigate = useNavigate();

    function handleLogout() {
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    return (
  
    <div>
 <div>
    <h3>Home Page <br /><span>{token.user.user_metadata.name}</span></h3>
   
    </div>




        <button className='btn btn-primary ' onClick={handleLogout}>Salir</button>
        <AddForm />
</div>
   
    );
}


export default Home;