'use client'
import {
  Button,
  Carousel,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { ReactNode, useState } from "react";
import { toast } from "./ui/use-toast";
import { useRouter } from 'next/navigation'

import { Abril_Fatface } from "next/font/google";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
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
  open?: boolean;
}

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
  open: defaultOpen = false
}: DialogProps) {
  const [open, setOpen] = useState(defaultOpen);
  const handleOpen = () => setOpen(prevState => !prevState);
  const handleConfirm = () => {
    onConfirm()
      .then(() => {
        toast({
          title: toastMessage,
          description: toastDescription,
        })
        handleOpen()
      })
      .catch(error => {
        console.log(error)
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
                  src="/auth/google-logo.jpg"
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
          <GettingStartedDialog
            OpenButton={<Button variant="text" size="sm">
              Learn More
            </Button>}
            onConfirm={(): Promise<any> => {
              throw new Error("Function not implemented.");
            }} />
        </DialogFooter>
      </Dialog>
    </>
  );
}



export function GettingStartedDialog({
  onConfirm,
  OpenButton,
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
  const router = useRouter()
  return (
    <>
      {
        <button onClick={handleOpen}>
          {OpenButton}
        </button>
      }
      <Dialog open={open} handler={handleOpen} size="md">
        <DialogHeader>
          <Typography variant="h4" color="blue-gray">
            How to learn on {' '}
            <span className={`${abrilFatface.className} text-3xl text-brown-primary`}>Capy</span>
            <span className={`${abrilFatface.className} text-3xl text-primary`}>Venture</span>
          </Typography>
        </DialogHeader>
        <div className="p-4">
          <Carousel
            className="rounded-md h-[33rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-brown-primary" : "w-4 bg-brown-primary/50"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <ArrowLeft className="size-10 text-brown-primary" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <ArrowRight className="size-10 text-brown-primary" />
              </IconButton>
            )}
          >
            <div>
              <img
                src="/instruction/1.png"
                alt="image 1"
                className="h-96 w-full object-cover"
              />
              <div className="pt-3 font-semibold text-lg">
                Select any words or sentences you do not know, and we will translate them instantly.
                Then, you can add these words or sentences to your collection to review later.
              </div>
            </div>
            <div>
              <img
                src="/instruction/2.png"
                alt="image 2"
                className="h-96 w-full object-cover"
              />
              <div className="pt-1 font-semibold text-lg">
                You can manage your own collections and add as many vocabularies as you want.
                Make sure to practice them further in <p className="cursor-pointer underline hover:text-accent" onClick={() => router.push('/game')}>Game Center</p>
              </div>
            </div>
            <div>
              <img
                src="/instruction/3.png"
                alt="image 3"
                className="h-96 w-full object-cover"
              />
              <div className="pt-3 font-semibold text-lg">
                From our story or video list, you can filter your preferred topics and your current English level.
                Subscribe to premium to unlock exclusive content and enhance your learning experience.
              </div>
            </div>
          </Carousel>
        </div>

      </Dialog>

    </>
  );
}