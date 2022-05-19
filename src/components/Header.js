import React from 'react'

function Header() {
  return (
    
    <div className='flex items-center justify-end'>

    <div className='mt-5 flex space-x-20 mr-20'>
    <p className='text-white cursor-pointer'>Home</p>
    <a className='text-white cursor-pointer' href="https://github.com/MarkARodriguez">Github</a>
    <p className='text-white cursor-pointer'>Apps</p>
    <p className='text-white cursor-pointer'>Email</p>

    </div>
   
  </div>
  )
}

export default Header