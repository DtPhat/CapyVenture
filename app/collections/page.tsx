'use client'
import React from 'react'
import SearchBar from '@/components/searchbar'
import { Select, Option, Button } from "@material-tailwind/react";
import { PlusIcon } from '@heroicons/react/24/solid';
import CollectionCard from './_components/card';
import { CreateCollection } from './_components/create';
import Container from '@/components/container';
export default function Collections() {

  return (
    <Container>
      <div className='grid grid-cols-2'>
        <h1 className='text-2xl font-semibold '>Manage Your Collections</h1>
        <div>
          <SearchBar placeholder="Search collection..." />
        </div>

      </div>
      <div className='text-lg'>2 collections | 40 Saved Words</div>
      <CreateCollection />
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
    </Container>
  )
}

