"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const RootPage = () => {
  const router = useRouter()
  router.push('/home')
  return (
    <div className='w-full'>
    </div>
  )
}

export default RootPage