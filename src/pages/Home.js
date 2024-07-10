import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export const Home = () => {

  const [count,setCount] = useState(0)
  const [show,setShow] = useState(false)

  const handleAdd =()=>{
    setCount((prev)=>prev+1)
  }
  const handleSub =()=>{
    setCount((prev)=>prev-1)
  }

  const handleShow =()=>{
    setShow((prev)=>!prev)
  }



  console.log('render')
  return (
    <div className=''>
     
     {show && <h1>Hello</h1>}

     <button onClick={handleShow} className='rounded-lg px-2 bg-blue-400'>Toggle show</button>

     <h1>{count}</h1>
     <button onClick={handleAdd} className='rounded-lg px-2 bg-blue-400'>Add Count</button>
     <button onClick={handleSub} className='rounded-lg px-2 bg-blue-400'>Sub Count</button>


     


    </div>
  )
}

export default Home