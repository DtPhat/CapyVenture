'use client'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";

interface MenuCheckbox {
  name?: string,
  checklist?: any,
}

export default function MenuCheckbox({ name, checklist }: MenuCheckbox) {
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button variant='text' className="normal-case text-md flex gap-2 py-2 px-4 border-black/50 border-2">
          <span>{name}</span>
          <ChevronDownIcon className="w-6 h-6 stroke-2" />
        </Button>
      </MenuHandler>
      <MenuList className="bg-purewhite border-2 border-black/50">
        <MenuItem className="p-0">
          <label
            htmlFor="item-1"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-1"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Comedy
          </label>
        </MenuItem>
        <MenuItem className="p-0">
          <label
            htmlFor="item-2"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-2"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Music
          </label>
        </MenuItem>
        <MenuItem className="p-0">
          <label
            htmlFor="item-3"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-3"
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none"
            />
            Health
          </label>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}