import React from 'react'
import { useAppContext } from '../context/state';

function Header() {

  const { owner } = useAppContext()


  return (
    <div className='bg-black px-10 py-5 flex justify-between items-center'>
      <h2 className='text-white font-bold text-2xl'>Edvora</h2>
      <div className='flex items-center space-x-7'>
        <h4 className='text-white text-lg'>{owner.name}</h4>
        <img src={owner.url} className='w-10 h-10 rounded-full' />
      </div>
    </div>
  )
}

export default Header


