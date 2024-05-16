"use client"
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '@/components/searchbar'
import CollectionCard from './_components/card';
import { CreateCollection } from './_components/create';
import Container from '@/components/container';
import useSWR from 'swr';
import { Collection } from '@/lib/definitions';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Typography,
  IconButton,
  Select,
  Option
} from "@material-tailwind/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AcademicCapIcon, GlobeAmericasIcon, HomeIcon, LanguageIcon, NewspaperIcon, PlusIcon, PuzzlePieceIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { collectionPictures } from '@/lib/constants';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from '@/lib/helpers/utils';
import { postFetcher } from '@/lib/config/fetchter';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  picture: z.string(),
})
export default function Collections() {
  const { data, isLoading, error } = useSWR('/collection')
  const collectionList: Collection[] = data?.data || []
  const countTotal = collectionList.reduce((total, item) => total + (item.totalVocab || 0), 0)
  return (
    <Container>
      <div className='grid grid-cols-2'>
        <h1 className='text-2xl font-semibold '>Manage Your Collections</h1>
        <div>
          <SearchBar placeholder="Search collection..." />
        </div>
      </div>
      <div className='text-lg'>{collectionList.length} collections | {countTotal} Saved Words</div>
      <CreateCollection />
      <div className="pt-4">
        <div className='w-52'>
          <Select label='Sort by' className='border'>
            <Option>Name (A-Z)</Option>
            <Option>Name (Z-A)</Option>
            <Option>Count (ASC)</Option>
            <Option>Count (DESC)</Option>
          </Select>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
        {collectionList.map(collection =>
          <CollectionCard
            key={collection.id}
            name={collection.name}
            description={collection.description}
            picture={collection.picture}
            totalVocab={collection.totalVocab}
            id={collection.id}
          />
        )}
      </div>
    </Container >
  )
}

