'use client'
import React, { useContext, useEffect } from 'react'
import Flashcard from '@/app/game/game/flashcard';
import TranslatableSection from '@/components/layout/translatable-section';
import { Button, Card, CardBody, CardHeader, Chip, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { ChevronDownIcon, ChevronRightIcon, PlusIcon, RectangleGroupIcon, RectangleStackIcon } from '@heroicons/react/24/solid';
import { CreateCollection } from "@/app/collections/_components/create";
import Link from 'next/link';
import Separator from '@/components/loader';
import { collection } from '@/lib/placeholders';
import useSWR from 'swr';
import { GameContext } from '@/providers/game';
const GamePage = () => {

  const {chosenCollection} = useContext(GameContext)
  
  const {data} = useSWR('/vocabularies/' + chosenCollection)

  

  return (
    <div className='text-black'>
      <Flashcard data={data}/>
    </div>
  )
}

export default GamePage