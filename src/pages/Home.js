import React from 'react'
import { Header } from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'


export const Home = () => {
  return (

    
    <div>
        <Header/>


        <h1>this is home</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusantium saepe magnam, alias ipsam quisquam dolores amet fuga sint eveniet quis error! Reprehenderit consequatur vitae rem necessitatibus enim officiis repellat.</p>
        
        <NavLink to='/'>Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>

        <Outlet/>

    </div>
  )
}
 