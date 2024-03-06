"use client"
import { useRouter } from 'next/navigation'

const RootPage = () => {
  const router = useRouter()
  if(true) {
    router.push('/home')
  }
  return <div>

  </div>
}

export default RootPage