import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Middle from './middle';
import Section from './sec3';

export default function RootLayout() {
  return (
    <>
<div className="grid-container">
<header>
  <h1> W.</h1> 
  <NavLink to="Home"> Home</NavLink>
  <NavLink to='News' > News </NavLink>
  
<NavLink to='Categories'>
    Categories
</NavLink>

</header>
<Middle/>
<Section/>
<Outlet/>

</div>
   

</>
    
  )
}
