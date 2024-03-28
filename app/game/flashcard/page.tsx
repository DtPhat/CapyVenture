'use client'
import React from 'react'
import Flashcard from '@/app/game/game/flashcard';
import TranslatableSection from '@/components/layout/translatable-section';
import { Button, Card, CardBody, CardHeader, Chip, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { ChevronDownIcon, ChevronRightIcon, PlusIcon, RectangleGroupIcon, RectangleStackIcon } from '@heroicons/react/24/solid';
import { CreateCollection } from '@/app/ui/collections/create';
import Link from 'next/link';
import Separator from '@/components/loader';
import { collection } from '@/lib/placeholder-data';
const GamePage = () => {
  const data = {
    question: "string 1",
    answer: "string 2",
  };
  return (
    <div className=''>
      <Flashcard data={collection}/>
    </div>
  )
}

export default GamePage