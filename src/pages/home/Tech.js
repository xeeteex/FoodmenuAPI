import React from 'react'
import { DiAngularSimple, DiAppstore, DiCss3Full, DiHtml5, DiJava, DiJavascript, DiReact, DiTravis } from 'react-icons/di'

export const Tech = () => {
  return (
    <div>
        <h3 className='text-3xl font-bold my-7 text-[#e8c34a] text-center'>Technologies I use</h3>

        <div className='tech-icons grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-3 justify-items-center gap-y-4 '>
            <DiHtml5 size={200} className='text-[#5c5a5a] hover:scale-125 hover:text-red-600 transition-all duration:300' />
            <DiJava size={200} className= " text-[#5c5a5a] className='text-[#5c5a5a] hover:animate-pulse hover:text-amber-700 duration-75"/>
            <DiCss3Full size={200}  className=' text-[#5c5a5a]  hover:text-blue-600 animate-bounce' />
            <DiReact size={200} className="text-[#5c5a5a]  hover:text-cyan-300 hover:animate-spin"/>
            <DiAngularSimple size={200} className='text-[#5c5a5a]  hover:text-green-600'/>
            <DiJavascript size={200} className='text-[#5c5a5a]  hover:text-pink-600'/>
            <DiAppstore size={200} className='text-[#5c5a5a]
             hover:text-blue-400 '/>
            <DiTravis size={200} className='text-[#5c5a5a]  hover:text-black '/> 

         
        </div>
    </div>
  )
}

export default Tech