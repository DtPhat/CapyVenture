'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { collection } from '@/lib/placeholders';
import useSWR from 'swr';
import { GameContext } from '@/providers/game';
import { getWordGuessingData } from '@/lib/helpers/array';
import WordGuessingQuestion from './_components/WordGuessingQuestion';
import Loader from '@/components/loader';
import WordGuessingAnswerCard from './_components/WordGuessingAnswerCard';
import clsx from 'clsx';
import CorrectAnswerFooter from '../_components/CorrectAnswerFooter';
import WrongAnswerFooter from '../_components/WrongAnswerFooter';

const Page = () => {
	const { chosenCollection } = useContext(GameContext);

	const { data } = useSWR('/vocabulary/' + chosenCollection);

	const [step, setStep] = useState<number>(0);
	const [disabled, setDisabled] = useState<boolean>(false);
	const [fillerWords, setFillerWords] = useState<string[]>([]);
	const [questionSet, setQuestionSet] = useState<
		{
			index: number;
			question: string[];
			answer: string;
			isSentence: boolean;
		}[]
	>([]);

  const [question, setQuestion] = useState<{
    index: number;
    question: string[];
    answer: string;
    isSentence: boolean;
  }>();

	const [selectedCards, setSelectedCards] = useState<string>('');

	const handleSelectCard = (text: string) => {
		if (text === selectedCards) {
			setSelectedCards('');
		} else {
			setSelectedCards(text);
		}
	};

	const handleIncreaseStep = () => {
		if (step >= questionSet.length - 1) {
			setStep(0);
		} else {
			setStep((prev) => prev + 1);
		}
	};

	const handleSubmit = () => {
		if (selectedCards) {
			setDisabled(true);
		}
	};

	const handleNextQuestion = () => {
		setDisabled(false);
		setSelectedCards('');
		handleIncreaseStep();
	};

	useEffect(() => {
		if (data) {
			const questionsBank = getWordGuessingData(data.data);
			setQuestionSet(questionsBank.questions);
			setFillerWords(questionsBank.fillerAnswers);
		}
	}, [data]);

  useEffect(()=>{
    setQuestion(questionSet[step])
  },[step,questionSet])

	if (!data) return <Loader />;

	return (
		<div className='w-full space-y-4 min-h-96'>
			<Typography
				variant='h5'
				color='blue-gray'
				className='mb-2 text-center'
			>
				Guess the missing words.
			</Typography>
			<Card className='w-full'>
				<CardBody className='flex justify-center items-center h-full'>
					{questionSet.length > 0 && question && (
						<WordGuessingQuestion
							questionSet={question}
						/>
					)}
				</CardBody>
			</Card>
			{questionSet.length > 0 && question && (
				<div className={clsx(disabled && 'pointer-events-none')}>
					<WordGuessingAnswerCard
						onClick={handleSelectCard}
						selectedCard={selectedCards}
						fillerAnswers={fillerWords}
						questionData={question}
					/>
				</div>
			)}
			<div className='w-full flex items-center justify-center gap-4'>
				<button
					onClick={handleSubmit}
					disabled={!!!selectedCards}
					className={clsx(
						'px-4 py-2 bg-white rounded-md shadow-md text-xl font-semibold',
						!selectedCards
							? 'bg-white/70 text-gray-800'
							: 'hover:text-accent'
					)}
				>
					Check
				</button>
				<button
					onClick={handleNextQuestion}
					className='px-4 py-2 bg-white rounded-md shadow-md text-xl font-semibold hover:text-accent'
				>
					Skip
				</button>
			</div>
			{disabled && (
				<>
					<CorrectAnswerFooter
						shown={selectedCards === question?.answer}
						onClick={handleNextQuestion}
					/>
					<WrongAnswerFooter
						shown={selectedCards !== question?.answer}
						onClick={handleNextQuestion}
						subText={question?.answer}
					/>
				</>
			)}
		</div>
	);
};

export default Page;
