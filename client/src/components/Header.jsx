import React from 'react'
//import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';
export default function Header() {
  return(
    <div className='bg-slate-200'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold">Auth App</h1>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  )
}