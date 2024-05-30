'use client'
import React, { ReactNode, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { toast } from "./ui/use-toast";

import { Abril_Fatface } from "next/font/google";
const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

interface DialogProps {
  OpenButton: ReactNode
  onConfirm: () => Promise<any>;
  loading?: boolean;
  data?: any;
  message?: string;
  description?: string;
  toastMessage?: string;
  toastDescription?: string;
}
import { mutate } from "swr"

export function ConfirmDialog({
  onConfirm,
  loading,
  OpenButton,
  data,
  message = 'Are you sure?',
  description = "Your action cannot be undone",
  toastMessage = 'Success',
  toastDescription = 'Your action was completed',
}: DialogProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(prevState => !prevState);

  const handleConfirm = () => {
    onConfirm()
      .finally(() => {
        toast({
          title: toastMessage,
          description: toastDescription,
        })
        handleOpen()
      });
  }

  return (
    <>
      {
        <button onClick={handleOpen}>
          {OpenButton}
        </button>
      }
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{message}</DialogHeader>
        <DialogBody>
          {description}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="filled" color="green" onClick={handleConfirm} disabled={loading} loading={loading}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}


export function LoginDialog({
  onConfirm,
  loading,
  OpenButton,
  toastMessage = 'Login successfully ✔️',
  toastDescription = '',
}: DialogProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(prevState => !prevState);
  const handleConfirm = () => {
    onConfirm()
      .finally(() => {
        toast({
          title: toastMessage,
          description: toastDescription,
        })
        handleOpen()
      });
  }

  return (
    <>
      {
        <button onClick={handleOpen}>
          {OpenButton}
        </button>
      }
      <Dialog size="xs" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Log in to {' '}
              <span className={`${abrilFatface.className} text-2xl text-brown-primary`}>Capy</span>
              <span className={`${abrilFatface.className} text-2xl text-primary`}>Venture</span>
            </Typography>
            <Typography color="gray" variant="paragraph" className="mt-2">
              Choose your authentication method
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5">
          <div className="mb-6">
            <ul className="mt-3 -ml-2 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md" onClick={() => handleConfirm()}>
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                  alt="google-icon"
                  className="h-6 w-6"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  Log in with Google
                </Typography>
              </MenuItem>
              <MenuItem className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://i.pinimg.com/736x/42/75/49/427549f6f22470ff93ca714479d180c2.jpg"
                  alt="facebook logo"
                  className="h-6 w-6 rounded-md"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  Log in with Facebook
                </Typography>
              </MenuItem>
            </ul>
          </div>

        </DialogBody>
        <DialogFooter className="justify-between gap-2">
          <Typography variant="small" color="gray" className="font-normal">
            New to our website?
          </Typography>
          <Button variant="text" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}