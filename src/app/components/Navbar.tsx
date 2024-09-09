'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.png'
import ind from '@/assets/Indonesia.png'
import { MdArrowOutward } from 'react-icons/md'

const Navbar = () => {
    return (
        <div >
            <div className="bg-blue-dana ">
                <nav className="flex justify-between items-center py-4 px-72 bg-blue-dana">
                    {/* <!-- Left Side: Logo --> */}
                    <div className="flex items-center">
                        <Image src={logo} alt="Logo" width={150} height={200} className="mr-4 pr-5 " />
                        <ul className="flex space-x-4 text-white">
                            <li>
                                <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
                                    <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-xl font-extrabold" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        Personal
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 gleopacity-0 hidden min-w-60 bg-white shadow-md rounded-2xl p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-2xl text-blue-dana font-extrabold" href="#">
                                            Personal<span><MdArrowOutward/></span>
                                        </a>
                                            <div className='bg-blue-dana border py-0.5 pl-4  '></div>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Dompet Digital
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Layanan Keuangan
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Gaya Hidup
                                        </a>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                            <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
                                    <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-xl font-extrabold" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        Bisnis
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-2xl text-blue-dana font-extrabold" href="#">
                                            Eksplor DANA untuk Bisnis<span><MdArrowOutward/></span>
                                        </a>
                                            <div className='bg-blue-dana border py-0.5 pl-4'></div>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-2xl font-bold " href="#">
                                            Solusi Pembayaran
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Payment Gateway
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Integrated Payment
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Point of Sales
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Dana for Bussnines
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
                                    <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-xl font-extrabold" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        Perusahaan
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                                       
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Tentang Kami
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Karier
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-black font-sans hover:text-gray-400 text-lg " href="#">
                                            Newsroom
                                        </a>
                                    
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Right Side: Button --> */}
                    <div className="flex items-center gap-3 ">
                        <div className='border-2 rounded-3xl border-white py-1 px-3  flex items-center'>
                            <Image src={ind} alt="ID Flag" className="h-5 w-5 mr-2" />
                            <span className='text-xl text-white font-bold '>ID</span>
                        </div>
                        <a href="#" className="bg-sky-400 text-white font-bold text-xl py-1 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-500">
                            Download DANA
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar