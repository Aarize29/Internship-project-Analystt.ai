import React from 'react'

const Navbar = () => {
  
  return (
    <div className='flex justify-between bg-[#ef4444] items-center rounded-xl rounded-t-none  fixed w-full  top-0 left-0'>
      <div className="logo" >
        <img className='w-30 h-auto  cursor-pointer ' src="https://leadzen.ai/wp-content/uploads/2021/10/Leadzen.png" alt="Leadzen.ai" />
      </div>
      <div className="flex p-7 justify-between">
        <h1 className='mr-5 font-bold text-[20px] cursor-pointer text-white' >Home</h1>
       
      </div>
    </div>
  )
}

export default Navbar
