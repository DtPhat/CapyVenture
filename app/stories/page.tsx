"use client"
import Link from "next/link";
import { ENGLISH_LEVELS } from "../../lib/constants";
import { storyList } from "../../lib/placeholder-data";
import MenuCheckbox from "@/components/menu-checkbox";
import SearchBar from "@/components/searchbar";
import ReadingCard from "./_components/card";

export default function Lessons() {
  return (
    <section className="px-16 py-8 flex flex-col gap-4 max-w-7xl">
      <div className="grid grid-cols-2 border-b-2 pb-2 border-black/50">
        <div className="pt-2">
          <SearchBar placeholder="Search lessons..." />
        </div>
        <div className="flex justify-end items-center gap-4">
          <MenuCheckbox name="Topic" checklist={["News", "Business", "Education", "Technology", "Entertainment"]} />
          <MenuCheckbox name="Level" checklist={ENGLISH_LEVELS} />
        </div>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          storyList.map(item =>
            <Link href='/stories/story' key={item.title}>
              <ReadingCard data={item} />
            </Link>
          )
        }
      </div>
    </section>

  );
}