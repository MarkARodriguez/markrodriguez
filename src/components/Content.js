import React from 'react'
import Button from '@mui/material/Button';


function Content() {
  return (
    <div className='pl-20 pt-20 flex'>
      
      <div className='ml-20 mt-10'>
          <h className='text-white text-6xl '>Hi! 👋</h>
          <br></br>
          <p className='text-white text-6xl mt-5'>My name is Mark</p>
          <p className='text-[#d9b439] text-2xl pt-5 pl-10'>SOFTWARE DEVELOPER +</p>
          <p className='text-[#FED960] text-2xl pt-1 pl-12'>BLOCKCHAIN ENGINEER</p>

        <br></br>
        <p className='text-white ml-20'>I am an engineer working on the future of the internet.</p>
         <p className='text-white ml-20'>Living and working in Miami, FL.</p>
         
         <br></br>
         <div className='ml-80 flex'>
         
         <Button variant="contained" size='large'style={{
        borderRadius: 35,
        backgroundColor: "#FED960",
        padding: "13px 16px",
        fontSize: "15px",
        color: 'black'
        
    }} >Waive</Button>
        </div>

      </div>
      
      <div className='ml-10 translate-x-20  -translate-y-9'>
      <img src='/images/rark.png' alt=''></img>
      </div>




        
    </div>

  
   
  )
}

export default Content