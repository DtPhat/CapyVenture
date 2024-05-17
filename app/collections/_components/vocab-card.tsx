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

interface VocabCardProps {
  id: string,
  sourceText: string,
  translation: string
}
export default function VocabCard({ id, sourceText, translation }: VocabCardProps) {
  const { toast } = useToast()
  const router = useRouter()

  return (
    <Card className="mt-4 border-2">
      <CardBody className='py-2'>
        <div className='flex justify-between gap-4 py-2 items-center divide-x-2 h-full'>
          <div className="grid grid-cols-2 gap-4 w-full divide-x-2">
            <div className="col-span-1">
              <p className="text-sm font-normal">Source text</p>
              <Typography color="blue-gray"
                className="text-lg font-semibold cursor-pointer"
              >
                {sourceText}
              </Typography>
            </div>
            <div className="col-span-1 pl-4">
              <p className="text-sm font-normal">Translation</p>
              <Typography color="blue-gray"
                className="text-lg font-semibold cursor-pointer text-brown-primary"
              >
                {translation}
              </Typography>
            </div>
          </div>
          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <EllipsisVerticalIcon className="w-8 h-8" />
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col divide-y-2 border-black/20 p-1">
              <MenuItem className="flex items-center gap-4">
                <div className="flex items-center gap-2" onClick={() => router.push("/collections/" + id)}>
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
              <MenuItem className="flex items-center gap-4 ">
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
      </CardBody>
    </Card>
  )
}
