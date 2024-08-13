import React from 'react'
import { Skeleton as SkeletonUI } from './ui/skeleton'
const Skeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <SkeletonUI className="h-60 w-full rounded-xl bg-primary/20" />
      <div className="space-y-2">
        <SkeletonUI className="h-4 w-full bg-primary/20" />
        <SkeletonUI className="h-4 w-5/6 bg-primary/20" />
      </div>
    </div>
  )
}

export default Skeleton