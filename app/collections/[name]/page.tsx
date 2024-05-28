'use client'
import Container from '@/components/container'
import { CollectionItem } from '@/lib/definitions'
import React from 'react'
import useSWR, { useSWRConfig } from 'swr'
import VocabCard from './_components/vocab-card'
import SearchBar from '@/components/searchbar'
import { Button } from '@material-tailwind/react'
import { PlusIcon } from 'lucide-react'
import ButtonIcon, { NavigateButtonIcon } from '@/components/button-icon'
import { CreateVocab } from './_components/create-vocab'
import { mutate } from "swr"

export default function CollectionDetail({ params }: { params: { name: string } }) {
  const collection = decodeURIComponent(params.name)
  const { data } = useSWR(`/vocabulary/` + collection)

  const vocabularyList: CollectionItem[] = data?.data
  return (
    <Container>
      <div className='w-full flex flex-col justify-start text-xl gap-2'>
        <div className='grid grid-cols-2'>
          <h1 className='text-2xl font-semibold '>{decodeURIComponent(collection)}</h1>
          <div>
            <SearchBar placeholder="Search item..." />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-lg font-normal'>You've added {vocabularyList?.length} vocabulary to this collection.</div>
          <NavigateButtonIcon linkTo="/game/flashcard" text="Go Practice" />
        </div>
        <CreateVocab collection={collection} />
        <div>
          <div className='grid grid-cols-1'>
            {vocabularyList?.map(vocab =>
              <VocabCard
                key={vocab._id}
                vocabulary={vocab}
              />
            )}
          </div>
        </div>
      </div>
    </Container >
  )
}
