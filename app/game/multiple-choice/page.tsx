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
    <div className='w-full space-y-4'>
      <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Find the translation the follwing text.
      </Typography>
      <Card className='w-full'>
        <CardBody className='flex justify-center items-center h-full' >
          <Typography className='font-semibold text-xl'>
            {"What is your name?"}
          </Typography>
        </CardBody>
      </Card>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 w-full gap-4'>
          <Card className='hover:bg-gray-200 hover:cursor-pointer min-h-32 bg-blue-50'>
            <CardBody className='flex justify-center items-center h-full' >
              <Typography className='font-semibold'>
                {"Xin chào, bạn khỏe không?"}
              </Typography>
            </CardBody>
          </Card>
          <Card className='hover:bg-gray-200 hover:cursor-pointer min-h-32 bg-green-50'>
            <CardBody className='flex justify-center items-center h-full' >
              <Typography className='font-semibold'>
                {"Tên bạn là gì?"}
              </Typography>
            </CardBody>
          </Card>
          <Card className='hover:bg-gray-200 hover:cursor-pointer min-h-32 bg-red-50'>
            <CardBody className='flex justify-center items-center h-full' >
              <Typography className='font-semibold'>
                {"Hôm nay là một ngày đẹp."}
              </Typography>
            </CardBody>
          </Card>
          <Card className='hover:bg-gray-200 hover:cursor-pointer min-h-32 bg-orange-50'>
            <CardBody className='flex justify-center items-center h-full' >
              <Typography className='font-semibold'>
                {"Bạn có thể giúp tôi không?"}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div >
  )
}

export default Page