'use client'
import React from 'react'
import SearchBar from '../ui/common/searchbar'
import { Select, Option, Button } from "@material-tailwind/react";
import { PlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
export default function Collections() {
  return (
    <section className="px-16 py-8 flex flex-col gap-4 w-full">
      <div className='grid grid-cols-2'>
        <h1 className='text-2xl font-semibold '>Manage Your Collections</h1>
        <div>
          <SearchBar placeholder="Search collection..." />
        </div>

      </div>
      <div className='text-lg'>2 collections | 40 Saved Words</div>
      <Button className="flex items-center justify-center gap-1 bg-primary text-xl max-w-72 py-2 rounded-lg">
        <PlusIcon className="w-8 h-8" />
        <span className='normal-case'>Create Collection</span>
      </Button>
      <div className="pt-4">
        <div className='w-52'>
          <Select label='Sort by' className='border'>
            <Option>Name (A-Z)</Option>
            <Option>Name (Z-A)</Option>
            <Option>Count (ASC)</Option>
            <Option>Count (DESC)</Option>
          </Select>
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
  )
}

function CollectionCard() {
  return (
    <Card className="mt-6 w-96 border-2">
      <CardBody className='py-2'>
        <div className='flex items-center justify-between px-2'>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-4 h-16 w-16 text-gray-900 hover:bg-gray-300 rounded p-2"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
          </button>

          <Typography variant="h5" color="blue-gray" className="mb-2">
            University Vocabulary
          </Typography>
        </div>
        <div className='flex justify-around font-semibold'>
          <p className='text-inherit'>29 total</p>
          |<p className='text-blue-700'>5 new</p>
          |<p className='text-red-700'>4 due</p>
          |<p className='text-primary'>5 active</p>
        </div>
      </CardBody>
      <CardFooter className="p-2">
        <a href="#" className="inline-block">
          <Button variant="text" className="text-sm flex items-center gap-2">
            Go Practice
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
