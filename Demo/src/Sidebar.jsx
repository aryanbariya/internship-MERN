import React from 'react'

function Sidebar() {
  return (
    <div>
        <li><button className='block w-full text-left text-white px-4 py-2 mb-2 bg-black border border-gray-300 rounded hover:bg-gray-200'>My Boards</button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board 1 </button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board 2</button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board 3</button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board agent 1</button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board agent 2</button></li>
        <li><button className='block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200'>Board agent 3</button></li>

    </div>
  )
}

export default Sidebar