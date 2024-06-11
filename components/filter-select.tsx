'use client'
import {
  IconButton,
  Option,
  Select
} from "@material-tailwind/react";
import { FilterX } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
interface MenuCheckbox {
  name: string,
  checklist?: string[],
}

export default function MenuCheckbox({ name, checklist }: MenuCheckbox) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const handleSelect = (val: string | undefined) => {
    if (val) {
      params.set(name, val);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Suspense>
      <div className="w-52">
        <Select color="gray"
          label={`Select ${name}`}
          className="normal-case text-md flex gap-2 py-2 px-4 bg-foreground border-2"
          onChange={(val) => handleSelect(val)}
        >
          {
            checklist?.map(item =>
              <Option
                className="bg-foreground"
                key={item}
                value={item}>
                {item}
              </Option>
            )
          }
        </Select>
      </div>
    </Suspense>

  );
}

export const ClearFilter = () => {
  const router = useRouter();
  const pathName = usePathname()
  return (
    <IconButton onClick={() => router.push(pathName)} className="bg-foreground border-2">
      <FilterX className='size-7 text-black' />
    </IconButton>
  )
}