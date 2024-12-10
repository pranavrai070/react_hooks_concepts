import React from 'react';
import { useLocation } from 'react-router';


const About = () => {
  const location=useLocation();
  return (
    <div>About
    <p>{location?.state?.name}</p>
    <p>{location?.state?.description}</p>
    </div>
  )
}

export default About;