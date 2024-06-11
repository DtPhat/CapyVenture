import { BASE_URL } from '@/lib/constants';
import { Story } from '@/lib/definitions';
import Link from 'next/link';
import React from 'react'
import { MiniStoryCard } from './card';

const RelatedStories = async ({ currentId }: { currentId: string }) => {
  const response = await fetch(
    `${BASE_URL}/story?page=1&size=4`, {
    next: {
      revalidate: 60,
      tags: ['story']
    }
  }).then(res => res.json());
  const storyList: Story[] = response?.data
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        storyList?.map(item =>
          item._id != currentId ? <MiniStoryCard key={item._id} data={item} /> : null
        )
      }
    </div>
  )
}

export default RelatedStories