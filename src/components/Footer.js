import React from 'react'

export const Footer = () => {
  return (
    <footer className='relative'>
     <svg className='sm:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8c34a" fillOpacity="1" d="M0,256L1440,0L1440,320L0,320Z"></path></svg>

      

      <div className='info absolute right-1/2 top-1/2 text-[#5c5a5a] sm:right-[40%] sm:top-[40%]'>

        <h1>Developed by:</h1>
        <p>Anonymous</p>

      </div>

    </footer>
  )
}

export default Footer