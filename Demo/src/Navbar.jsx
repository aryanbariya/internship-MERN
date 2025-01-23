import React from 'react';
import Sidebar from './Sidebar';
import star from '/star.png'

function Navbar() {
  return (
    <div className='m-0 mr-0 -ml-32'>
      <ul className="list-none text-left w-[240px] h-[1051px] border-r border-gray-300 bg-gray-50 p-4">
        <li className="mb-4 text-xl font-bold text-gray-800">Resumizeme</li>
        <li className='block w-full text-left text-white  px-4 py-2 mb-2 bg-black border border-gray-300 rounded hover:bg-gray-200'>
          <div className='flex gap-4'>
            <img src={star} />
            <button className="  ">
              My Templates
            </button>
          </div>


        </li>
        <li>
          <button className="block w-full text-left text-gray-300 px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Search Templates
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Software Engineer
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Computer Hardware Engineer
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Network Engineer
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Technical Support
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Network Administrator
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Management
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Data Analyst
          </button>
        </li>
        <li>
          <button className="block w-full text-left px-4 py-2 mb-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
            Computer Technician
          </button>
        </li>
        <Sidebar />
      </ul>

    </div>
  );
}

export default Navbar;
