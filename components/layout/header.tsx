'use client'
import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  MobileNav,
  MenuItem,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { Bars3Icon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Abril_Fatface } from "next/font/google";
import { DisplayContext } from "@/providers/display";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "@/firebase/config";
import { useAuth } from "@/providers/auth";
import UserMenu from "../user-menu";
import { postFetcher } from "@/lib/config/fetchter";
import { BASE_URL } from "@/lib/constants";
import { LoginDialog } from "../dialog";
const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const { login, userInfo, googleAuthenticate } = useAuth()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenMobileNav(false),
    );
  }, []);

  const { setOpenSidebar } = useContext(DisplayContext)


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="mb-14">
      <Navbar className={`fixed top-0 z-40 ${openMobileNav ? 'h-auto' : 'max-h-16'} max-w-full rounded-none py-2 px-5 shadow`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button onClick={() => setOpenSidebar(opening => !opening)}>
              <Bars3Icon className="h-10 w-10 stroke-2 hover:bg-brown-primary/10 rounded-3xl p-1 text-black" />
            </button>
            <Link href='/' className="flex items-center justify-between select-none">
              <img src="/icon.png" alt="brand" className="w-9 h-9" />
              <span className={`${abrilFatface.className} text-2xl text-brown-primary`}>Capy</span>
              <span className={`${abrilFatface.className} text-2xl text-primary`}>Venture</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {
              userInfo?.email
                ? <div>
                  <UserMenu />
                </div>
                : <div className="flex items-center gap-x-2">
                  <Button
                    variant="text"
                    className="px-8"
                  >
                    <span>Register</span>
                  </Button>
                  <LoginDialog
                    onConfirm={googleAuthenticate}
                    OpenButton={
                      <Button
                        className="bg-primary px-8"
                      >
                        Login
                      </Button>
                    }
                  />

                </div>
            }
          </div>
        </div>
      </Navbar>

    </div >
  );
}