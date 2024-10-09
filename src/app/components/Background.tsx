import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div
        className='absolute top-[5%] w-full py-8 text-zinc-300 text-2xl flex justify-center'>
        Made By Umair
      </div>
      <h1 
        className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tighter font-semibold text-zinc-700'>
          Umair.
      </h1>
    </div>
    </>
  )
}

export default Background
