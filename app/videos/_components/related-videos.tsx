import { BASE_URL } from '@/lib/constants';
import { Story, Video } from '@/lib/definitions';
import Link from 'next/link';
import React from 'react'
import { MiniVideoCard } from './card';

const RelatedVideos = async () => {
  const response = await fetch(
    `${BASE_URL}/video?page=1&size=3`, {
    next: {
      revalidate: 60,
      tags: ['video']
    }
  }).then(res => res.json());
  const videoList: Video[] = response?.data
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        videoList?.map(item =>
          <Link href={`/${item._id}`} key={item._id}>
            <MiniVideoCard data={item} />
          </Link>)
      }
    </div>
  )
}

export default RelatedVideos