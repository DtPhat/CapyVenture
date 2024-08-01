'use client';
import React, { useContext, useEffect, useState } from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { GameContext } from '@/providers/game';
import useSWR from 'swr';
import { Loader } from 'lucide-react';
import { splitAndShuffleFourAnswers } from '@/lib/helpers/array';
import MultipleChoiceCard from './_components/MultipleChoiceCard';
import CorrectAnswerFooter from '../_components/correct-answer-footer';
import WrongAnswerFooter from '../_components/wrong-answer-footer';

type MultipleChoiceData = {
	id: string;
	sourceText: string;
	translation: string;
};

type ShuffleDataType = {
	question?: MultipleChoiceData;
	answers: MultipleChoiceData[];
}[];

const Page = () => {
	const { chosenCollection } = useContext(GameContext);

	const { data } = useSWR('/vocabulary/' + chosenCollection);

	const [questionsBank, setQuestionsBank] = useState<ShuffleDataType>([]);

	const [step, setStep] = useState<number>(0);

	const [selectedCard, setSelectedCard] = useState<string>('');

	const [isCardDisabled, setIsCardDisabled] = useState<boolean>(false);

	const [openFooter, setOpenFooter] = useState<boolean>(false);

	const handleSelectCard = (textId: string) => {
		setSelectedCard(textId);
		console.log('asdawd ', textId);
	};

	const handleIncreaseStep = () => {
		if (step >= questionsBank?.length - 1) {
			setStep(0);

			return;
		}
		setStep((prev) => prev + 1);
	};

	const handleNextQuestion = () => {
		setIsCardDisabled(false);
		setOpenFooter(false);
		setSelectedCard('');
		handleIncreaseStep();
	};

	useEffect(() => {
		const shuffleData = splitAndShuffleFourAnswers(data?.data);

		console.log('asdawd ', shuffleData);

		setQuestionsBank(shuffleData);
	}, [data]);

	useEffect(() => {
		if (selectedCard.length > 0) {
			setIsCardDisabled(true);
			setOpenFooter(true);
		}
	}, [selectedCard]);

	if (!data) return <Loader />;

	if (data.data.length < 5)
		return (
			<Typography variant='h5'
			color='blue-gray'
			className='mb-2 text-center'>
				The collection does not have enough vocabulary. Please add more
				or select another collection!
			</Typography>
		);

	return (
		<div className='w-full h-full space-y-4'>
			<Typography
				variant='h5'
				color='blue-gray'
				className='mb-2 text-center'
			>
				Find the translation the follwing text.
			</Typography>
			<Card className='w-full'>
				<CardBody className='flex justify-center items-center h-full'>
					<Typography className='font-semibold text-xl'>
						{questionsBank?.at(step)?.question?.sourceText}
					</Typography>
				</CardBody>
			</Card>

			<div className='flex justify-center'>
				<div className='grid grid-cols-2 w-full gap-4 items-center justify-items-center min-h-[250px]'>
					{questionsBank?.at(step)?.answers.map((answer, index) => (
						<MultipleChoiceCard
							key={index}
							item={answer}
							selectedCard={selectedCard}
							correctAnswer={questionsBank.at(step)?.question?.id}
							disabled={isCardDisabled}
							onClick={handleSelectCard}
						/>
					))}
				</div>
			</div>
			{openFooter && (
				<>
					<CorrectAnswerFooter
						shown={
							selectedCard ===
							questionsBank.at(step)?.question?.id
						}
						onClick={handleNextQuestion}
					/>
					<WrongAnswerFooter
						subText={questionsBank.at(step)?.question?.translation!}
						shown={
							selectedCard !==
							questionsBank.at(step)?.question?.id
						}
						onClick={handleNextQuestion}
					/>
				</>
			)}
		</div>
	);
};

export default Page;
