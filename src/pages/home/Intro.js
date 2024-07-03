import React from 'react'

export const Intro = () => {
  return (
    <div>
        <h2 className='dis-info text-5xl text-[#5c5a5a]  font-semibold text-center my-7 '>Who am I</h2>

      <div className='dis-info-shape h-[400px] w-[400px] bg-[#e8c34a]  rounded-full border-[7px] border-[#5c5a5a] flex justify-center items-center mx-auto ' >
           
           <div className='info text-[#5c5a5a]'>

            <p>Name: Some Person</p>
            <p>Email: someperson@gmail.com</p>
            <p>Tell:97777</p>
            <p>Age:90</p>
            <p>EXperience: None</p>

           </div>

        </div>

    </div>
  )
}

export default Intro;