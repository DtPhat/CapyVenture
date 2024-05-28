"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SearchBar, { HomeSearchBar } from '@/components/searchbar'
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

const Home = () => {
  return (
    <div className='w-full relative'>
      <div className='absolute w-full h-[70vh] bg-black/50 bg-gradient-to-r from-primary/80 to-accent/40 '>
        <div className='font-semibold flex justify-center h-full px-16 flex-col tracking-wide '>
          <div className='text-5xl text-foreground'>LEARN & PLAY.</div>
          <div className='text-5xl pt-2 text-white'>Start a joyful journey of mastering English.</div>
          <div className='font-normal mt-6 text-4xl text-white/85'>Study English through most interesting stories and videos.</div>
          <div className='pt-12'>
            <HomeSearchBar placeholder='Search videos, stories,..' />
          </div>
          <div className='mt-6'>
            {/* <Button className='font-normal text-xl underline underline-offset-4 bg-accent px-2'>Getting Started</Button> */}
            <ButtonIcon text='GET STARTED' className='text-2xl text-green-100 underline underline-offset-4 group hover:-translate-y-0.5 hover:text-foreground'
              Icon={<Rocket className='w-9 h-9 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-2' />}
            />
          </div>
        </div>
        <Container clasName='!py-0 !px-0'>
          <div className='mt-8 p-8 text-2xl font-semibold'>
            <div className='flex justify-between'>
              <h1 className='pb-4'>Best Videos for Learning</h1>
              <NavigateButtonIcon linkTo='/videos' text='Watch more' />
            </div>
            <div className='flex gap-8'>
              {
                videoList.map(item =>
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
              <h1 className='pb-4'>Top must-read educational writings</h1>
              <NavigateButtonIcon linkTo='/stories' text='Read more' />
            </div>
            <div className='flex gap-4'>
              {
                storyList.map(item => <MiniStoryCard data={item} key={item.title} />)
              }
            </div>
          </div>
        </Container>
      </div>
      <div className='w-full h-full'>
        <Image src="/background.png" alt="background" className='w-full h-[70vh] object-cover' height={512} width={512} />
      </div>
    </div>
  )
}

export default Home