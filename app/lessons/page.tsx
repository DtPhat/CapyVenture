"use client"
import { TagIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import Link from "next/link";
import SearchBar from "../ui/common/searchbar";
import MenuCheckbox from "../ui/common/menu-checkbox";
import ReadingCard from "../ui/reading/card";

const cardData = [
  {
    name: "Maze of Shadows"
  },
  {
    name: "UI/UX Review Check"
  },
  {
    name: "UI/UX Review Check"
  },
  {
    name: "UI/UX Review Check"
  },
  {
    name: "UI/UX Review Check"
  }
]
export default function Lessons() {
  return (
    <section className="px-16 py-8 flex flex-col gap-4 max-w-7xl">
      <div className="grid grid-cols-2 border-b-2 pb-2 border-black/50">
        <SearchBar placeholder="Search lessons..." />
        <div className="flex justify-end items-center gap-4">
          <MenuCheckbox name="Topic" />
          <MenuCheckbox name="Level" />
        </div>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          cardData.map(item =>
            <Link href='/lessons/lesson'>
              <ReadingCard />
            </Link>
          )
        }
      </div>
    </section>

  );
}