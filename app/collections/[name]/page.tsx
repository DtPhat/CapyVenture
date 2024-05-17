'use client'
import Container from '@/components/container'
import { CollectionItem } from '@/lib/definitions'
import React from 'react'
import useSWR from 'swr'
import VocabCard from '../_components/vocab-card'
import SearchBar from '@/components/searchbar'
import { Button } from '@material-tailwind/react'
import { PlusIcon } from 'lucide-react'

export default function CollectionDetail({ params }: { params: { name: string } }) {
  const { data } = useSWR(`/vocabulary/` + params.name)
  const vocabularyList: CollectionItem[] = data?.data

  return (
    <Container>
      <div className='w-full flex flex-col justify-start text-xl gap-2'>
        <div className='grid grid-cols-2'>
          <h1 className='text-2xl font-semibold '>{decodeURIComponent(params.name)} Collection</h1>
          <div>
            <SearchBar placeholder="Search item..." />
          </div>
        </div>
        <div className='text-lg font-normal'>Total {vocabularyList?.length} saved words</div>
        <div>
          <Button className="flex items-center justify-center gap-1 bg-primary text-lg max-w-64 py-2 rounded-lg">
            <PlusIcon className="w-8 h-8" />
            <span className='normal-case'>Create vocabulary</span>
          </Button>
        </div>
        <div>
          <div className='grid grid-cols-1'>
            {vocabularyList?.map(vocab =>
              <VocabCard
                key={vocab.id}
                sourceText={vocab.sourceText}
                translation={vocab.translation}
                id={vocab.id}
              />
            )}
          </div>
        </div>
      </div>
    </Container >
  )
}
