import React, { useState } from 'react';
import logo from '../images/icon/Logo_Compina.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate()
  const [sale,setSale]=useState(false)
  console.log(sale)
  return (
    <nav className=" fixed w-full z-20 top-0 start-0 ">
      <div className="relative z-30 bg-black max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" onClick={()=>setSale(!sale)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a onClick={()=>navigate("/")} className="cursor-pointer block py-2 px-3 text-mysin-400  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer block py-2 px-3 hover:text-mysin-400 transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  cursor-pointer hover:text-mysin-400 transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">Services</a>
            </li>
            <li>
              <a onClick={()=>navigate('/contact')} className="cursor-pointer block py-2 px-3 hover:text-mysin-400 transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div
        className={`z-20 absolute inset-x-0 transition-transform duration-300 ease-in-out ${
          sale ? 'transform translate-y-0' : 'transform -translate-y-full'
        } mt-0 md:hidden container mx-auto bg-transparent grid`}
        id="navbar-sticky"
      >
          <ul className="flex bg-black flex-col p-4 md:p-0 font-medium  rounded-b-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            <li>
              <a onClick={()=>navigate("/")} className="cursor-pointer block py-2 px-3 transition-all duration-150 hover:bg-mysin-200 text-mysin-400  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer block py-2 px-3  transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  cursor-pointer hover:text-mysin-400 transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">Services</a>
            </li>
            <li>
              <a onClick={()=>navigate('/contact')} className="cursor-pointer block py-2 px-3 hover:text-mysin-400 transition-all duration-150 rounded md:hover:bg-transparent md:p-0 text-white  md:dark:hover:bg-transparent ">Contact</a>
            </li>
            
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
