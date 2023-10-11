import React from 'react'
import qr1 from '../assets/qr1.png'

const Home = () => {
  return (
    
<div className='bg-gray-400 w-full h-screen justify-center items-center flex'>
<div className='bg-white items-center rounded-xl h-4/5 w-4/5 lg:w-1/5  md:2/5 mx-auto p-3'>
<div className='mx-3 mt-4 items-center'>
    <div className='bg-blue-400 h-60 justify-center items-center flex' >
        <img className='object-fit ' src={qr1} alt=''/>
    </div>
    <div className='mt-4'>
        <p className='text-2xl font-bold text-blue-300'>Improve your Front-end Skills by building Projects</p>
        <span className='text-base text-gray-400'>Scan the QR card to visit Frontend Mentor and take your Coding Skills to the next level. </span>
    </div>
</div>
</div>
</div>
  )
}

export default Home
