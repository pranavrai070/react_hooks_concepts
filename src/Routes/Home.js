import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();

    const aboutusData={
        name:"Pranav Rai",
        description:"Software Engineer"
    }
  return (
    <div>Home
    <button style={{margin:"4rem"}} onClick={()=>navigate('/aboutus',{state:aboutusData})}>See About Us</button>
    </div>
  )
}

export default Home;