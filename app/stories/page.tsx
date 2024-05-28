import Link from "next/link";
import { ENGLISH_LEVELS } from "@/lib/constants";
import MenuCheckbox from "@/components/menu-checkbox";
import SearchBar from "@/components/searchbar";
import Container from "@/components/container";
import Storylist from "./_components/story-list";
import StoriesCarousel from "./_components/carousel";

export default function Stories() {
  return (
    <div className="w-full">
      <StoriesCarousel />
      <Container>
        <div className="grid grid-cols-2 border-b-2 pb-2 border-black/50">
          <div className="pt-2">
            <SearchBar placeholder="Search stories..." />
          </div>
          <div className="flex justify-end items-center gap-4">
            <MenuCheckbox name="Category" checklist={["News", "Business", "Education", "Technology", "Entertainment"]} />
            <MenuCheckbox name="Level" checklist={ENGLISH_LEVELS} />
          </div>
        </div>
        <Storylist />
      </Container>
    </div>
  );
}