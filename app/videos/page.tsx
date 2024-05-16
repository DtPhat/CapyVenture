"use client"
import MenuCheckbox from "@/components/menu-checkbox";
import SearchBar from "@/components/searchbar";
import Link from "next/link";
import { ENGLISH_LEVELS } from "../../lib/constants";
import { Video } from "../../lib/definitions";
import { videoList } from "../../lib/placeholders";
import VideoCard from "./_components/card";
import Container from "@/components/container";
export default function Videos() {
  return (
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
            <Link href='/videos/video' key={video.title}>
              <VideoCard data={video} />
            </Link>
          )
        }
      </div>
    </Container>

  );
}