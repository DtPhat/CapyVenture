
import React from 'react'
// import { storyList } from "@/lib/placeholders";
import StoryCard from "./card";
import Link from 'next/link';
import { BASE_URL } from '@/lib/constants';
import { Story } from '@/lib/definitions';

const Storylist = async ({ title = '', level = '', category = '' }: { title: string | undefined, level: string | undefined, category: string | undefined }) => {
  const response = await fetch(
    `${BASE_URL}/story?size=100&title=${title}&category=${category}&level=${level}`, {
    next: {
      revalidate: 60,
      tags: ['story']
    }
  }).then(res => res.json());
  console.log(response)
  const storyList: Story[] = response?.data

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {
        storyList?.map(item =>
          <StoryCard key={item._id} data={item} />
        )
      }
    </div>
  )
}

export default Storylist
