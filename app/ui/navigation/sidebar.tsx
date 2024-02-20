'use client'
import {
  ArchiveBoxIcon,
  Bars3Icon,
  BookOpenIcon,
  BookmarkSquareIcon,
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  PowerIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
  UserIcon,
  VideoCameraIcon,
  WalletIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography
} from "@material-tailwind/react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../providers";
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const navigationList = [
    {
      Icon: HomeIcon,
      name: "Home",
      link: "/home",
      index: 1
    },
    {
      Icon: BookOpenIcon,
      name: "Reading",
      link: "/lessons",
      index: 2
    },
    {
      Icon: VideoCameraIcon,
      name: "Videos",
      link: "/videos",
      index: 3
    },
    {
      Icon: PuzzlePieceIcon,
      name: "Game Center",
      link: "/game",
      index: 4
    },

    //personal navigation
    {
      Icon: BookmarkSquareIcon,
      name: "My Collections",
      link: "/collections",
      index: 5
    },
    {
      Icon: WalletIcon,
      name: "Saved Lessons",
      link: "/save",
      index: 6
    },
    {
      Icon: UserIcon,
      name: "Account",
      link: "/user",
      index: 7
    },
  ]
  const pathname = usePathname()


  const { openSidebar } = useContext(LayoutContext)

  const dismiss: DismissType = {
    outsidePress: false
  }

  useEffect(() => {
    
  }, [pathname]);

  return (
    <div className={`${openSidebar ? 'pr-64' : 'pr-0'}`}>
      <Drawer open={openSidebar} className="z-10 " overlay={false} dismiss={dismiss}>
        <Card className="fixed top-0 h-screen p-2 pt-16 flex flex-col gap-4 w-64 shadow-xl rounded-none select-none border-r-2">
          <List>
            {navigationList.map((item) =>
              <Link href={item.link} key={item.index}>
                <ListItem selected={pathname.includes(item.link)}>
                  <ListItemPrefix>
                    <item.Icon className="h-6 w-6" />
                  </ListItemPrefix>
                  <Typography className="mr-auto tracking-wide">
                    {item.name}
                  </Typography>
                </ListItem>
                {item.link === '/game' && <hr className="my-2 border-black" />}
              </Link>
            )}
          </List>
        </Card>
      </Drawer>
    </div >

  );
}

type DismissType = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePress?: boolean;
  referencePressEvent?: "pointerdown" | "mousedown" | "click";
  outsidePress?: boolean | ((event: MouseEvent) => boolean);
  outsidePressEvent?: "pointerdown" | "mousedown" | "click";
  ancestorScroll?: boolean;
  bubbles?:
  | boolean
  | {
    escapeKey?: boolean;
    outsidePress?: boolean;
  };
};