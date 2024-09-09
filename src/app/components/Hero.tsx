'use client'

import React from 'react'
import TagDana from '@/assets/TagDana.svg'
import Image from 'next/image'
import Hero2 from '@/assets/Dana.png'

const Hero = () => {
  return (
    <div>
    <div className="relative h-screen overflow-hidden">
      {/* Video as background */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="https://a.m.dana.id/resource/danaweb-v2/video/DANA_bukan_dompet_biasa.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      {/* Gradasi di atas video */}
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-blue-dana to-transparent z-10"></div>

      {/* Gradasi di bawah video */}
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-biru-dana to-transparent z-10"></div>

      {/* Content on top of video */}
      <div className="relative z-10 flex items-end justify-center h-full">
        <div className="text-center text-white">
        <Image src={TagDana} alt='tagdana' className='w-full h-auto'/>
        </div>
      </div>
    </div>
        <Image src={Hero2} alt={'dana'} className='pt-24 bg-biru-dana'/>
        </div>
  )
}

export default Hero
