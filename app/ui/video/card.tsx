"use client"
import { PlayCircleIcon, TagIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from "@material-tailwind/react";

interface ReadingCardProps {
  data?: {
    image: string,
    name: string,
    lastUpdated: string,
    length: number,
    summary: string,
    level: number,
    tag: string,
  }
}
export default function VideoCard(data: ReadingCardProps) {
  return (
    <Card className="overflow-hidden group relative">
      <CardHeader
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/321/39/desktop-wallpaper-sakura-blossom-petals-scenery-sky-cherry-cherry-blossom-anime-aesthetic.jpg"
          alt="ui/ux review check"
          className="transition duration-400 ease-in-out group-hover:scale-105"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block ">
          <PlayCircleIcon className="w-28 h-28 opacity-50" />
        </div>
        <div className="absolute flex items-center gap-2 justify-between bottom-2 right-2 bg-black/50">
          <div className="bg-black px-2 text-center rounded text-white">2:15</div>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-1 p-4">
        <Typography className="text-lg font-semibold" color="black">
          Maze of Shadows
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center px-4 pt-0">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 justify-between">
            <div className="bg-primary w-6 h-6 text-center rounded-md text-white">3</div>
            <div className="text-sm">
              Upper-Intermediate
            </div>
          </div>
          <div className="flex items-center gap-1">
            <TagIcon className="w-5 h-5" />
            <span className="text-sm">
              Health
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export function MiniVideoCard(data: ReadingCardProps) {
  return (
    <Card className="overflow-hidden group relative">
      <CardHeader
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/321/39/desktop-wallpaper-sakura-blossom-petals-scenery-sky-cherry-cherry-blossom-anime-aesthetic.jpg"
          alt="ui/ux review check"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
          <PlayCircleIcon className="w-28 h-28 opacity-50" />
        </div>
        <div className="absolute flex items-center gap-2 justify-between bottom-2 right-2 bg-black/50">
          <div className="bg-black px-2 text-center rounded text-white">2:15</div>
        </div>
        <div className="flex items-center justify-center absolute bottom-2 left-2 border rounded-md">
          <div className="bg-primary w-8 h-8 text-center rounded-md text-white pt-0.5 text-lg">3</div>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-1 py-2 px-4">
        <Typography className="font-semibold" color="black">
          Maze of Shadows
        </Typography>
        <p className="text-sm">Ted ed</p>
      </CardBody>
    </Card>
  )
}
