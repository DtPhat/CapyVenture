'use client'
import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { collection } from '@/lib/placeholders';

const Page = () => {
  const [selectedCards, setSelectedCards] = useState()
  const handleSelectCard = (text: string) => {
  }
  return (
    <div className='w-full space-y-4 min-h-96'>
      <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Guess the missing words.
      </Typography>
      <Card className='w-full'>
        <CardBody className='flex justify-center items-center h-full' >
          <Typography className='font-semibold text-2xl'>
            {"What ____ your ____?"}
          </Typography>
        </CardBody>
      </Card>
      <div className='flex justify-center gap-4'>
        <Card className='hover:bg-gray-200 hover:cursor-pointer'>
          <CardBody className='flex justify-center items-center h-full' >
            <Typography className='font-semibold'>
              {"is"}
            </Typography>
          </CardBody>
        </Card>
        <Card className='hover:bg-gray-200 hover:cursor-pointer'>
          <CardBody className='flex justify-center items-center h-full' >
            <Typography className='font-semibold'>
              {"name"}
            </Typography>
          </CardBody>
        </Card>
        <Card className='hover:bg-gray-200 hover:cursor-pointer'>
          <CardBody className='flex justify-center items-center h-full' >
            <Typography className='font-semibold'>
              {"are"}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div >
  )
}

export default Page