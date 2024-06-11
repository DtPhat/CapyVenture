import { BASE_URL } from '@/lib/constants';
import { Story, Video } from '@/lib/definitions';
import Link from 'next/link';
import React from 'react'
import { MiniVideoCard } from './card';


const RelatedVideos = async ({ currentId }: { currentId: string }) => {
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
          item._id != currentId ? < MiniVideoCard data={item} /> : null
        )
      }
    </div>
  )
}

export default RelatedVideos