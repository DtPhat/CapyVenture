"use client"
import Container from '@/components/container';
import SearchBar from '@/components/searchbar';
import { Collection } from '@/lib/definitions';
import {
  Option,
  Select
} from "@material-tailwind/react";
import useSWR from 'swr';
import CollectionCard from './_components/card';
import { CreateCollection } from './_components/create';

export default function Collections() {
  const { data, isLoading, error } = useSWR('/collection')
  const collectionList: Collection[] = data?.data || []
  const countTotal = collectionList.reduce((total, item) => total + (item.totalVocab || 0), 0)
  return (
    <Container>
      <div className='grid grid-cols-2'>
        <h1 className='text-2xl font-semibold '>Manage Your Collections</h1>
        <div>
          <SearchBar placeholder="Search collection..." />
        </div>
      </div>
      <div className='text-lg'>{collectionList.length} collections | {countTotal} Saved Words</div>
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
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
        {collectionList.map(collection =>
          <CollectionCard
            key={collection.id}
            name={collection.name}
            description={collection.description}
            picture={collection.picture}
            totalVocab={collection.totalVocab}
            id={collection.id}
          />
        )}
      </div>
    </Container >
  )
}

