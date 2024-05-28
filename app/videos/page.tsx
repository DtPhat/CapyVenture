import MenuCheckbox from "@/components/menu-checkbox";
import SearchBar from "@/components/searchbar";
import Link from "next/link";
import { ENGLISH_LEVELS } from "../../lib/constants";
import { Video } from "../../lib/definitions";
import VideoCard from "./_components/card";
import Container from "@/components/container";
import { getVideos } from "@/lib/actions/videos";
import { videoList } from "@/lib/placeholders";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";
export default async function Videos() {
  const response = await getVideos()
  const videoList = response?.data
  return (
    <div className="w-full">
      <div className="relative">
        <img src={"https://wallpapercave.com/wp/wp10261833.jpg"}
          alt={""}
          className="w-full object-cover h-[16rem]"
        />
        <div className="absolute-center font-bold text-white text-4xl">
          <h1>Most interesting videos to learn.</h1>
        </div>
        <div className="absolute-center font-bold text-white text-4xl">
          <PlayCircleIcon className="w-48 h-48 opacity-15"/>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-2 border-b-2 pb-2 border-black/50">
          <div className="pt-2">
            <SearchBar placeholder="Search lessons..." />
          </div>
          <div className="flex justify-end items-center gap-4">
            <MenuCheckbox name="Category" checklist={["News", "Business", "Education", "Technology", "Entertainment", "History"]} />
            <MenuCheckbox name="Level" checklist={ENGLISH_LEVELS} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {
            videoList.map((video: Video) =>
              <Link href={`/videos/${video._id}`} key={video._id}>
                <VideoCard data={video} />
              </Link>
            )
          }
        </div>
      </Container>
    </div>
  );
}