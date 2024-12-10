import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div>
        <ul style={{display:"flex",listStyle:"none",gap:30,cursor:"pointer"}}>
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/aboutus')}>About</li>
            <li onClick={()=>navigate('/contact')}>Contacts</li>
            <li onClick={()=>navigate('/projects')}>Projects</li>
            <li onClick={()=>navigate('/counter')}>Counter</li>
            <li onClick={()=>navigate('/jokes')}>Jokes</li>
            <li onClick={()=>navigate('/reducer_counter')}>Reducer Counter</li>
            <li onClick={()=>navigate('/redux_counter')}>Redux Counter</li>
        </ul>
    </div>
  )
}

export default Navbar;