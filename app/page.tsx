"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const RootPage = () => {
  const router = useRouter()
  router.push('/home')
}

export default RootPage