'use client'
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import { estimateReadingTime } from '../_lib/utils';
import { LEVEL_NUMBERS } from '@/lib/constants';
import { BookOpen, TagIcon } from 'lucide-react';
import ButtonIcon, { NavigateButtonIcon } from '@/components/button-icon';
const StoriesCarousel = () => {
  return (
    <div className='w-full'>
      <Carousel transition={{ duration: 1 }} className="h-[18rem]" navigation={() => (null)} loop={true} autoplay={true}>
        <div className='relative h-[18rem] group cursor-pointer'>
          <img
            src="https://img.freepik.com/premium-photo/anime-scenery-beautiful-sea-with-flowers-rocks-generative-ai_902846-27589.jpg"
            alt="image 1"
            className="h-full w-full object-cover blur-sm"
          />
          <div className='absolute-center flex rounded-md overflow-hidden gap-2 h-56'>
            <img
              src="https://img.freepik.com/premium-photo/anime-scenery-beautiful-sea-with-flowers-rocks-generative-ai_902846-27589.jpg"
              alt=""
              className='w-80 h-full object-cover'
            />
            <Card className='w-96 h-full bg-transparent shadow-none text-black'>
              <CardBody className="flex flex-col gap-1 p-2 px-4">
                <Typography className="text-lg font-semibold" color="black">
                  {"Animated scenery of a beautiful view with flowers"}
                </Typography>
                <p className="text-xs">{'Jan 08, 2024'} · {"4"} min read</p>
                <Typography className="font-normal text-sm h-14">
                  <p className="line-clamp-3">
                    {"A magical tale of adventure and discovery in a place where anything is possible."}
                  </p>
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 px-4 gap-2 flex flex-col">
                <div className=''>
                  <div className="flex flex-wrap items-center gap-4 text-black">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="bg-primary w-6 h-6 text-center rounded-md text-white">{"3"}</div>
                      <div className="text-sm">
                        {"Intermediate"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TagIcon className="w-5 h-5" />
                      <span className="text-sm">
                        {"Travel"}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <NavigateButtonIcon text='Learn more' />
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block ">
            <BookOpen className="w-28 h-28 opacity-15 text-black" />
          </div>
        </div>
        <div className='relative h-[18rem] group cursor-pointer'>
          <img
            src="https://i.pinimg.com/736x/71/8b/1b/718b1b205e0da6a1ca4a9027f9afccea.jpg"
            alt="image 1"
            className="h-full w-full object-cover blur-sm"
          />
          <div className='absolute-center flex rounded-md overflow-hidden gap-2 h-56'>
            <img
              src="https://i.pinimg.com/736x/71/8b/1b/718b1b205e0da6a1ca4a9027f9afccea.jpg"
              alt=""
              className='w-80 h-full object-cover'
            />
            <Card className='w-96 h-full bg-transparent shadow-none text-black'>
              <CardBody className="flex flex-col gap-1 p-2 px-4">
                <Typography className="text-lg font-semibold" color="black">
                  {"Animated scenery of a beautiful view with flowers"}
                </Typography>
                <p className="text-xs">{'Jan 08, 2024'} · {"4"} min read</p>
                <Typography className="font-normal text-sm h-14">
                  <p className="line-clamp-3">
                    {"A magical tale of adventure and discovery in a place where anything is possible."}
                  </p>
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 px-4 gap-2 flex flex-col">
                <div className=''>
                  <div className="flex flex-wrap items-center gap-4 text-black">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="bg-primary w-6 h-6 text-center rounded-md text-white">{"3"}</div>
                      <div className="text-sm">
                        {"Intermediate"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TagIcon className="w-5 h-5" />
                      <span className="text-sm">
                        {"Travel"}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <NavigateButtonIcon text='Learn more' />
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block ">
            <BookOpen className="w-28 h-28 opacity-15 text-black" />
          </div>
        </div>
        <div className='relative h-[18rem] group cursor-pointer'>
          <img
            src="https://w0.peakpx.com/wallpaper/125/1000/HD-wallpaper-jaeger-sixth-anime-landscape-field-clouds-sky-scenery-anime.jpg"
            alt="image 1"
            className="h-full w-full object-cover blur-sm"
          />
          <div className='absolute-center flex rounded-md overflow-hidden gap-2 h-56'>
            <img
              src="https://w0.peakpx.com/wallpaper/125/1000/HD-wallpaper-jaeger-sixth-anime-landscape-field-clouds-sky-scenery-anime.jpg"
              alt=""
              className='w-80 h-full object-cover'
            />
            <Card className='w-96 h-full bg-transparent shadow-none text-black'>
              <CardBody className="flex flex-col gap-1 p-2 px-4">
                <Typography className="text-lg font-semibold" color="black">
                  {"Animated scenery of a beautiful view with flowers"}
                </Typography>
                <p className="text-xs">{'Jan 08, 2024'} · {"4"} min read</p>
                <Typography className="font-normal text-sm h-14">
                  <p className="line-clamp-3">
                    {"A magical tale of adventure and discovery in a place where anything is possible."}
                  </p>
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 px-4 gap-2 flex flex-col">
                <div className=''>
                  <div className="flex flex-wrap items-center gap-4 text-black">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="bg-primary w-6 h-6 text-center rounded-md text-white">{"3"}</div>
                      <div className="text-sm">
                        {"Intermediate"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TagIcon className="w-5 h-5" />
                      <span className="text-sm">
                        {"Travel"}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <NavigateButtonIcon text='Learn more' />
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block ">
            <BookOpen className="w-28 h-28 opacity-15 text-black" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default StoriesCarousel