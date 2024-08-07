'use client'
import { NavigateButtonIcon } from '@/components/button-icon'
import Container from '@/components/container'
import SearchBar from '@/components/search-bar'
import { Collection, CollectionItem } from '@/lib/definitions'
import useSWR from 'swr'
import { CreateVocab } from './_components/create-vocab'
import VocabCard from './_components/vocab-card'

export default function CollectionDetail({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id)
  const { data: collection } = useSWR<Collection>(`/collections/` + id)
  const vocabularyList: CollectionItem[] = collection?.vocabularies || []
  return (
    <Container>
      <div className='w-full flex flex-col justify-start text-xl gap-2'>
        <div className='grid grid-cols-2'>
          <div>
            <h1 className='text-2xl font-semibold '>{collection?.name}</h1>
            <h1 className='text-xl '>{collection?.description}</h1>
          </div>
          <div>
            <SearchBar placeholder="Search item..." />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-lg font-normal'>You've added {vocabularyList?.length || 0} vocabulary to this collection.</div>
          <NavigateButtonIcon linkTo="/game/flashcard" text="Go Practice" />
        </div>
        {collection ? <CreateVocab collection={collection!} /> : null}
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
