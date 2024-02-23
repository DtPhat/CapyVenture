'use client'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  router.push('/game/flashcard')

}

export default Page