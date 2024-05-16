
import React from 'react'
// import { storyList } from "@/lib/placeholders";
import StoryCard from "./card";
import Link from 'next/link';
import { BASE_URL } from '@/lib/constants';
import { Story } from '@/lib/definitions';

const Storylist = async () => {
  const response = await fetch(
    `${BASE_URL}/story?page=1&size=10&sortBy=_id&direction=asc`, {
    next: {
      revalidate: 60,
      tags: ['story']
    }
  }).then(res => res.json());

  const storyList: Story[] = response?.data

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {
        storyList.map(item =>
          <Link href={`/stories/${item._id}`} key={item.title}>
            <StoryCard data={item} />
          </Link>
        )
      }
    </div>)
}

export default Storylist
