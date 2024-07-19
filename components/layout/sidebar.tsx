'use client'
import { useAuth } from "@/providers/auth";
import { DisplayContext } from "@/providers/display";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  RectangleGroupIcon,
  Square2StackIcon,
  Squares2X2Icon
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { LoginDialog, PremiumDialog } from "../dialog";
import { useRouter } from "next/navigation";
import { Crown } from "lucide-react";

const navigationList = [
  {
    Icon: "/sidebar/home.png",
    name: "Home",
    link: "/home",
    index: 1
  },
  {
    Icon: "/sidebar/video.png",
    name: "Videos",
    link: "/videos",
    index: 3
  },
  {
    Icon: "/sidebar/story.png",
    name: "Stories",
    link: "/stories",
    index: 2
  },
  {
    Icon: "/sidebar/game.png",
    name: "Game Center",
    link: "/game",
    index: 4,
    subPages: [
      {
        Icon: Square2StackIcon,
        name: "Flashcard",
        link: "/game/flashcard",
        index: 4.1
      },
      {
        Icon: RectangleGroupIcon,
        name: "Matching",
        link: "/game/matching",
        index: 4.2
      },
      {
        Icon: QuestionMarkCircleIcon,
        name: "Word Guessing",
        link: "/game/word-guessing",
        index: 4.3
      },
      {
        Icon: Squares2X2Icon,
        name: "Multiple Choice",
        link: "/game/multiple-choice",
        index: 4.4
      },
    ],
  },

  //personal navigation
  {
    Icon: "/sidebar/collection.png",
    name: "My Collections",
    link: "/collections",
    index: 5
  },
  // {
  //   Icon: "WalletIcon",
  //   name: "Saved Lessons",
  //   link: "/save",
  //   index: 6
  // },
  {
    Icon: "/sidebar/user.png",
    name: "Account",
    link: "/account",
    index: 7
  },
]
export default function Sidebar() {
  const [open, setOpen] = useState(0);
  const { userInfo, googleAuthenticate } = useAuth()
  const [openLogin, setOpenLogin] = useState(false)
  const [openPremium, setOpenPremium] = useState(false)
  const handleOpen = (value: number) => {
    // setOpen(open === value ? 0 : value);
    setOpen(open === value ? 0 : value);
  };

  const { setOpenSidebar } = useContext(DisplayContext)
  const pathname = usePathname()
  const router = useRouter()

  const { openSidebar } = useContext(DisplayContext)

  const dismiss: DismissType = {
    outsidePress: false
  }
  const handleOpenLogin = () => {
    setOpenLogin(prev => !prev)
  }
  const handleOpenPremium = () => {
    setOpenPremium(prev => !prev)
  }
  const requiredAuthenticationLinks = ['/game/flashcard', '/game/multiple-choice', '/game/matching', '/game/word-guessing', '/collections', '/account']
  const requiredPremiumLinks = ['/game/word-guessing', '/game/multiple-choice']


  const handleAccess = (e: SyntheticEvent, link: string) => {
    if (!userInfo && requiredAuthenticationLinks.includes(link)) {
      handleOpenLogin()
      return
    }
    if (!userInfo?.isPremium && requiredPremiumLinks.includes(link)) {
      handleOpenPremium()
      return
    }
    router.push(link)
  }


  useEffect(() => {
    
  }, [pathname]);

  return (
    <div className={`${openSidebar ? 'pr-64' : 'pr-0'}`}>
      <Drawer open={openSidebar} className="z-10 " overlay={false} dismiss={dismiss}>
        <Card className="fixed top-0 h-screen p-2 pt-16 flex flex-col gap-4 w-64 shadow-xl rounded-none select-none border-r-2">
          <List>
            {navigationList.map((item) =>
              item.subPages ?
                <div key={item.name}>
                  <Accordion
                    open={open === 1}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-5 w-5 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                      />
                    }
                  >
                    <ListItem className="p-0" >
                      <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                        <ListItemPrefix>
                          <img className="size-6" src={item.Icon} />
                        </ListItemPrefix>
                        <Typography className="mr-auto tracking-wide text-black">
                          {item.name}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="p-1 text-black flex flex-col gap-1 pl-1.5">
                      {item.subPages.map(subItem =>
                        <div key={subItem.index} onClick={(e) => handleAccess(e, subItem.link)} className="relative">
                          <ListItem selected={pathname.includes(subItem.link)}>
                            <ListItemPrefix>
                              <subItem.Icon className={`size-6 ${requiredPremiumLinks.includes(subItem.link) ? 'text-yellow-900' : ''}`} />
                            </ListItemPrefix>
                            <Typography>
                              {subItem.name}
                            </Typography>
                            {requiredPremiumLinks.includes(subItem.link) && < div className="ml-1 absolute left-6 top-1">
                              <Crown className="size-5 rotate-45 text-yellow-700" />
                            </div>}
                          </ListItem>
                        </div>
                      )}
                    </AccordionBody>
                  </Accordion >
                  {item.link === '/game' && <hr className="my-2 border-black" />}
                </div>
                : <div onClick={(e) => handleAccess(e, item.link)} key={item.name}>
                  <ListItem selected={pathname.includes(item.link)}>
                    <ListItemPrefix>
                      <img className="size-6" src={item.Icon} />
                    </ListItemPrefix>
                    <Typography className="mr-auto tracking-wide">
                      {item.name}
                    </Typography>
                  </ListItem>
                </div>
            )
            }
          </List >
        </Card >
      </Drawer >
      <LoginDialog
        open={openLogin}
        handleOpen={handleOpenLogin}
        onConfirm={googleAuthenticate}
      />
      <PremiumDialog
        open={openPremium}
        handleOpen={handleOpenPremium}
       />
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