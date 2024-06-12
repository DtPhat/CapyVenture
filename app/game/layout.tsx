'use client';
import React, { useEffect, useState } from 'react';
import Flashcard from '@/app/game/game/flashcard';
import TranslatableSection from '@/components/layout/translatable-section';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Chip,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';
import {
	ChevronDownIcon,
	ChevronRightIcon,
	PlusIcon,
	QuestionMarkCircleIcon,
	RectangleGroupIcon,
	RectangleStackIcon,
	Square2StackIcon,
	Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { CreateCollection } from '@/app/collections/_components/create';
import Link from 'next/link';
import Separator from '@/components/separator';
import useSWR from 'swr';
import { Collection } from '@/lib/definitions';
import { GameContext} from '@/providers/game';
const GameLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const { data, isLoading } = useSWR('/collection');
	const [chosenCollection, setChosenCollection] = useState('');
	const collections: Collection[] = data?.data;
	useEffect(() => {
		if (collections?.length) {
			setChosenCollection(collections[0].name);
		}
	}, [data]);
	return (
		<div className='px-16 py-8 flex flex-col gap-4 w-full'>
			<div className='flex w-full justify-center'>
				<Menu offset={10}>
					<div className='flex items-center text-xl font-semibold gap-4'>
						<div>Playing with:</div>
						<MenuHandler>
							<Button
								variant='outlined'
								className='px-2 py-1 border-black/50 border-2 rounded-lg flex items-center gap-1 text-primary border-primary'
							>
								<span className='normal-case text-lg'>
									{chosenCollection || 'Choose collection'}
								</span>
								<ChevronDownIcon className='w-6 h-6' />
							</Button>
						</MenuHandler>
					</div>
					<MenuList className='p-1 text-black bg-foreground flex flex-col gap-1'>
						{collections?.map((collection) => (
							<MenuItem
								key={collection.id}
								className='flex gap-4 border-2 items-center justify-between py-0.5'
								onClick={() => {
									setChosenCollection(collection?.name);
								}}
							>
								<div className='rounded-full border-2'>
									<img
										className='w-8 h-8'
										src={collection.picture}
									/>
								</div>
								<div className='text-ellipsis min-w-32 max-w-64'>
									<p className='truncate'>
										{collection?.name}
									</p>
								</div>
								<Chip
									value={collection.totalVocab}
									size='sm'
									variant='ghost'
									className='rounded-full'
								/>
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			</div>
			<Separator />
			<div className='w-full'>
				<TranslatableSection>
					<GameContext.Provider
						value={{ chosenCollection, setChosenCollection }}
					>
						{children}
					</GameContext.Provider>
				</TranslatableSection>
			</div>
			<Separator />
			<div>
				<h1 className='font-semibold pb-2 text-lg'>Other games</h1>
				<div className='grid grid-cols-4 gap-8'>
					<Link href='/game/flashcard' className='space-y-2'>
						<Card className='overflow-hidden hover:bg-accent/10 p-4 flex justify-center flex-col items-center gap-8 group bg-foreground'>
							<Square2StackIcon className='w-40 h-40 text-accent' />
							<CardHeader
								shadow={false}
								color='transparent'
								className='text-center text-xl text-black font-semibold group-hover:text-primary'
							>
								Flash Card
							</CardHeader>
						</Card>
					</Link>
					<Link href='/game/matching' className='space-y-2'>
						<Card className='overflow-hidden hover:bg-accent/10 p-4 flex justify-center flex-col items-center gap-8 group bg-foreground'>
							<RectangleGroupIcon className='w-40 h-40 text-primary' />
							<CardHeader
								shadow={false}
								color='transparent'
								className='text-center text-xl text-black font-semibold group-hover:text-primary'
							>
								Matching
							</CardHeader>
						</Card>
					</Link>
					<Link href='/game/matching' className='space-y-2'>
						<Card className='overflow-hidden hover:bg-accent/10 p-4 flex justify-center flex-col items-center gap-8 group bg-foreground'>
							<QuestionMarkCircleIcon className='w-40 h-40 text-red-700/50' />
							<CardHeader
								shadow={false}
								color='transparent'
								className='text-center text-xl text-black font-semibold group-hover:text-primary'
							>
								Word Guessing
							</CardHeader>
						</Card>
					</Link>
					<Link href='/game/matching' className='space-y-2'>
						<Card className='overflow-hidden hover:bg-accent/10 p-4 flex justify-center flex-col items-center gap-8 group bg-foreground'>
							<Squares2X2Icon className='w-40 h-40 text-orange-700/50' />
							<CardHeader
								shadow={false}
								color='transparent'
								className='text-center text-xl text-black font-semibold group-hover:text-primary'
							>
								Multiple Choice
							</CardHeader>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GameLayout;
