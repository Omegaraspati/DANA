'use client'

import Image from 'next/image'
import React from 'react'
import Testi from '@/assets/Testi.png'
import { FaArrowRight } from 'react-icons/fa'

const Hero2 = () => {
    return (
        <div className='flex justify-center bg-abu-bg'>
            <Image src={Testi} alt={'testi'} width={500} height={500} className='pr-10' />
            <div className='pt-24 max-w-[500px] space-y-2'>
                <h1 className='font-thin text-blue-dana text-3xl '>DOMPET DIGITAL</h1>
                <p className='text-5xl font-extrabold :'>Seperti dompetmu, tapi lebih canggih</p>
                <p className='text-gray-400 font-semibold text-xl'>DANA Wallet bikin kamu lebih mudah untuk akses semua kebutuhan transaksi dan mulai berinvestasi.
                </p>
                <div className='pt-2'>
                <a href="#" className="border-blue-dana border text-blue-dana font-bold text-xl py-1 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-500">
                    Cari Tahu Selengkapnya
                    {/* <span><FaArrowRight /></span> */}
                </a>
                </div>
            </div>
        </div>
    )
}

export default Hero2