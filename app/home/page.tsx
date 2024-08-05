"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import SearchBar, { HomeSearchBar } from '@/components/search-bar'
import { MiniStoryCard } from '../stories/_components/card'
import { MiniVideoCard } from '../videos/_components/card'
import { Button } from '@material-tailwind/react'
import { ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import ButtonIcon, { NavigateButtonIcon } from '@/components/button-icon'
import Separator from '@/components/separator'
import { storyList, videoList } from '../../lib/placeholders'
import { Rat, Rocket } from 'lucide-react'
import Container from '@/components/container'
import { toast } from '@/components/ui/use-toast'
import { useAuth } from '@/providers/auth'
import { GettingStartedDialog } from '@/components/dialog'
import { BASE_URL } from '@/lib/constants'
import { Story, Video } from '@/lib/definitions'

const Home = () => {
  const { login } = useAuth()
  const searchParams = useSearchParams()
  const paymentSuccess = searchParams.get('payment_success')
  const { userInfo } = useAuth()
  const [stories, setStories] = useState<Story[]>([])
  const [videos, setVideos] = useState<Video[]>([])
  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch(`${BASE_URL}/stories?page=1&size=4`)
        .then(res => res.json())
        .then(res => setStories(res))
        .catch(error => console.log(error))
    }
    const fetchVideos = async () => {
      const response = await fetch(`${BASE_URL}/videos?page=1&size=3`)
        .then(res => res.json())
        .then(res => setVideos(res))
        .catch(error => console.log(error))
    }
    fetchStories()
    fetchVideos()
  }, []);
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    const currentUserInfo = JSON.parse(storedUserInfo || "null")
    const token = localStorage.getItem('token');
    if (paymentSuccess && currentUserInfo) {
      login({ ...currentUserInfo, isPremium: true }, token!)
    }
  }, []);

  if (paymentSuccess && userInfo) {
    toast({
      title: 'Subsribe to premium successfully!',
      description: 'You now have full access to the premium content',
    })
  }
  return (
    <Suspense>
      <div className='w-full relative'>
        <div className='absolute w-full h-[65vh] bg-black/50 bg-gradient-to-r from-primary/80 to-accent/40 '>
          <div className='font-semibold flex justify-center h-full px-16 flex-col tracking-wide '>
            <div className='text-5xl text-foreground'>LEARN & PLAY.</div>
            <div className='text-4xl pt-2 text-white'>Start a joyful journey of mastering English.</div>
            <div className='font-normal mt-6 text-3xl text-white/80'>Study English through most interesting stories and videos.</div>
            <div className='pt-12'>
              <HomeSearchBar placeholder='Search videos, stories,..' />
            </div>
            <div className='mt-6'>
              {
                <GettingStartedDialog
                  OpenButton={
                    <ButtonIcon text='HOW TO GET STARTED?' className='text-xl text-green-100 underline underline-offset-4 group hover:-translate-y-0.5 hover:text-foreground'
                      Icon={<Rocket className='w-7 h-7 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 pt-1' />}
                    />
                  }
                  onConfirm={(): Promise<any> => {
                    throw new Error('Function not implemented.')
                  }} />
              }
            </div>
          </div>
          <Container clasName='!py-0 !px-0'>
            <div className='mt-4 p-8 text-2xl font-semibold'>
              <div className='flex justify-between'>
                <h1 className='pb-4'>Best Videos for Learning</h1>
                <NavigateButtonIcon linkTo='/videos' text='Watch more' />
              </div>
              <div className='grid grid-cols-3 gap-4'>
                {
                  videos?.map(item =>
                    <MiniVideoCard data={item} key={item.caption} />
                  )
                }
              </div>
            </div>
          </Container>
          <div className='mx-8'>
            <Separator />
          </div>
          <Container clasName='!py-0 !px-0'>
            <div className='p-8 text-2xl font-semibold'>
              <div className='flex justify-between'>
                <h1 className='pb-4'>Top must-read writings</h1>
                <NavigateButtonIcon linkTo='/stories' text='Read more' />
              </div>
              <div className='grid grid-cols-4 gap-4'>
                {
                  stories?.map(item =>
                    <MiniStoryCard data={item} key={item._id} />
                  )
                }
              </div>
            </div>
          </Container>
        </div>
        <div className='w-full h-full'>
          <Image src="/background.png" alt="background" className='w-full h-[65vh] object-cover' height={512} width={512} />
        </div>
      </div>
    </Suspense>
  )
}

export default Home