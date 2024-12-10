import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-10 border  rounded p-2'>
      <div className='flex items-center space-x-4 font-bold text-md text-slate-600 uppercase'>
        <div className='w-1/6 '>subject</div>
        <div className='w-1/6 '>priority</div>
        <div className='w-1/6'>status</div>
        <div className='w-1/2 '>description</div>
      </div>
    </div>
  )
}

export default Header
