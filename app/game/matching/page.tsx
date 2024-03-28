'use client'
import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { collection } from '@/lib/placeholder-data';
import { splitAndShuffleCollection } from '@/lib/helpers/arrayUtils';
const data = splitAndShuffleCollection(collection)

const Page = () => {
  const [selectedCards, setSelectedCards] = useState()
  console.log(data)
  const handleSelectCard = (text: string) => {
  }
  return (
    <div className='w-full'>
      <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Match the source text with its translation
      </Typography>
      <div className='flex justify-center'>
        <div className='flex gap-4 flex-wrap justify-center'>
          {
            data.map(item =>
              <Card className="bg-foreground w-80 h-40 border-2 hover:bg-accent/10 cursor-pointer" key={item.text}
                onClick={() => handleSelectCard(item.text)}
              >
                <CardBody className='flex justify-center items-center h-full' >
                  <Typography className='font-semibold'>
                    {item.text}
                  </Typography>
                </CardBody>
              </Card>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Page