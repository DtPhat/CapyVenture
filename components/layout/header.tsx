'use client'
import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
  MobileNav,
} from "@material-tailwind/react";
import Link from "next/link";
import { Bars3Icon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Abril_Fatface } from "next/font/google";
import { DisplayContext } from "@/providers/display";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "@/firebase/config";
import { useAuth } from "@/providers/auth";
import UserMenu from "../user-menu";
import useSWR from "swr";
import { postFetcher } from "@/lib/config/fetchter";
const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const {  login, userInfo } = useAuth()
  const googleAuthenticate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const googleToken = credential?.accessToken
        console.log(googleToken)
        if (googleToken) {
          const response = await postFetcher('/auth/login/google',
            { token: googleToken }
          )
          console.log("login response" , response)
          login(response?.userInfo, response?.token)
        }

      }).catch((error) => {
        console.log(error)
      });
  }

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
                    <span>Sign up</span>
                  </Button>
                  <Button
                    onClick={(e) => googleAuthenticate(e)}
                    className="bg-primary px-8"
                  >
                    Login
                  </Button>
                </div>
            }
            {/* <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenMobileNav(!openMobileNav)}
            >
              {openMobileNav ? (
                <XMarkIcon width={24} />
              ) : (
                <Bars2Icon width={24} />
              )}
            </IconButton> */}
          </div>
        </div>
        {/* <MobileNav open={openMobileNav} className="py-2">
          {
            userInfo?.email
              ? <div>
                <UserMenu />
              </div>
              : < div className="flex items-center gap-x-1">
                <Button fullWidth variant="text" size="sm" className="">
                  <span>Sign Up</span>
                </Button>
                <Button fullWidth variant="filled" size="sm" className="bg-primary" onClick={(e) => googleAuthenticate(e)}>
                  <span>Login</span>
                </Button>

                <Button
                  variant="text"
                  className="hidden lg:inline-block px-8"
                >
                  <span>Sign up</span>
                </Button>
                <Button

                  className="hidden lg:inline-block bg-primary px-8"
                >
                  Login
                </Button>
              </div>
          }
        </MobileNav> */}
      </Navbar>
    </div >
  );
}