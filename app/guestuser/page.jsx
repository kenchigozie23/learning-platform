import React from 'react'

export default function guestUser() {
  return (
    <div className='flex justify-center item h-screen w-full'>
        <h1>Protected Page</h1>
        <h2>Hi! <span className='text-2xl font-bold text-green-600'>Kenneth</span></h2>
    </div>
  )
}
