"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='w-full relative'>
      <div className='absolute w-full h-[70vh] bg-black/50 bg-gradient-to-r from-black/90 to-accent/50 text-white'>
        <div className='font-semibold flex justify-center h-full px-16 flex-col tracking-wide'>
          <div className='text-5xl'>LEARN & PLAY.</div>
          <div className='text-5xl pt-2'>Start a joyful journey mastering English.</div>
          <div className='font-normal mt-6 text-4xl'>Study English through most interesting stories and videos.</div>
        </div>
      </div>
      <div className='w-full h-full'>
        <Image src="/background.png" alt="background" className='w-full h-[70vh] object-cover' height={512} width={512} />
      </div>
    </div>
  )
}

export default Home