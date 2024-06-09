import { BASE_URL } from '@/lib/constants';
import { Story } from '@/lib/definitions';
import Link from 'next/link';
import React from 'react'
import { MiniStoryCard } from './card';

const RelatedStories = async () => {
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
          <Link href={`/${item._id}`} className="space-y-2" key={item._id}>
            <MiniStoryCard data={item} />
          </Link>)
      }
    </div>
  )
}

export default RelatedStories