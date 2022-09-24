import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
        <h3 className='font-bold'>Github Search</h3>
        <span>
            <Link className='mr-2' to='/' >Home</Link>
            <Link to='/favourites'>Favourites</Link>
        </span>


    </nav>
  )
}

export default Navigation