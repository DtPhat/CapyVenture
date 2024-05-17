"use client"
import { EllipsisVerticalIcon, EyeIcon, HomeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { NavigateButtonIcon } from "@/components/button-icon";
import { deleteFetcher } from "@/lib/config/fetchter";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface CollectionCardProps {
  name?: string,
  description?: string,
  picture?: string,
  accountId?: string,
  totalVocab?: number,
  id?: string
}
export default function CollectionCard({ name, description, picture = "", totalVocab, accountId, id }: CollectionCardProps) {
  const { toast } = useToast()
  const router = useRouter()


  const deleteCollection = async () => {
    await deleteFetcher(`/collection/${id}`)
      .finally(() => {
        toast({
          title: "Collection deleted",
          description: "Your action was successful",
        })
      })
  }
  return (
    <Card className="mt-4 border-2">
      <CardBody className='py-2'>
        <div className='flex justify-between gap-2 py-2 items-center'>
          <div className="rounded-full border-2 bg-gradient-to-r from-primary/80 to-accent/40">
            <img className="w-20 h-20" src={picture} />
          </div>
          <div>
            <Typography color="blue-gray"
              className="text-lg font-semibold hover:text-primary cursor-pointer line-clamp-1"
              onClick={() => router.push("/collections/" + name)}>
              {name}
            </Typography>
            <Typography color="blue-gray" className="">
              {totalVocab} saved words
            </Typography>
          </div>
          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <EllipsisVerticalIcon className="w-8 h-8" />
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col divide-y-2 border-black/20 p-1">
              <MenuItem className="flex items-center gap-4" onClick={() => router.push("/collections/" + name)}>
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5" />
                  <Typography color="gray" className="font-semibold">
                    View
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <PencilIcon className="w-5 h-5" />
                  <Typography color="gray" className="font-semibold">
                    Edit
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 " onClick={() => deleteCollection()}>
                <div className="flex items-center gap-2 ">
                  <TrashIcon className="w-5 h-5" />
                  <Typography color="gray" className="font-semibold">
                    Delete
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <p className="line-clamp-1">
          {description}
        </p>
        {/* <div className='flex justify-between font-semibold px-2'>
          <p className='text-inherit'>29 total</p>
          |<p className='text-blue-700'>5 new</p>
          |<p className='text-red-700'>4 due</p>
          |<p className='text-green-700'>5 active</p>
        </div> */}
      </CardBody>
      <CardFooter className="p-2 flex justify-end pr-4">
        <NavigateButtonIcon linkTo="/game/flashcard" text="Go Practice" />
      </CardFooter>
    </Card>
  )
}
