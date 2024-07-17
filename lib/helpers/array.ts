import { CollectionItem } from '@/lib/definitions';
import shuffle from 'lodash/shuffle';

export const splitAndShuffleCollection = (data: CollectionItem[]) => {
	const slitData: DataToSplit = [];
	data.forEach((item) => {
		const { _id, sourceText, translation } = item;
		slitData.push(
			{
				id: _id,
				text: sourceText,
			},
			{
				id: _id,
				text: translation,
			}
		);
	});
	return shuffle(slitData);
};

export const splitAndShuffleCollectionForMatchingGame = (
	data: CollectionItem[]
) => {
	const splitSourceTextData: DataToSplit = [];
	const splitTranslationData: DataToSplit = [];

	const shuffledData = shuffle(data);

	const n = shuffledData.length > 5 ? 5 : shuffledData.length;

	for (let i = 0; i < n; i++) {
		const { _id, sourceText, translation } = shuffledData[i];

		splitSourceTextData.push({
			id: _id,
			text: sourceText,
		});
		splitTranslationData.push({
			id: _id,
			text: translation,
		});
	}

	return {
		shuffledSourceTexts: splitSourceTextData,
		shuffledTranslations: shuffle(splitTranslationData),
	};
};

export const splitAndShuffleFourAnswers = (
	data: CollectionItem[]
) => {

	const questionsAndAnswersData: {
		question?: MultipleChoiceData;
		answers: MultipleChoiceData[];
	}[] = []

	const shuffledData = shuffle(data);

	const shortCollectionDifference = shuffledData.length - 4;

	for (let i = 0; i < shuffledData.length; i++) {

		const splitAnswerData: MultipleChoiceData[] = [];

		const oneQuestionAndAnswers: {
			question?: MultipleChoiceData;
			answers: MultipleChoiceData[]
		} = {
			question: undefined, 
			answers: []
		}

		const { _id, sourceText, translation } = shuffledData[i];
		splitAnswerData.push({
			id: _id,
			sourceText: sourceText,
			translation: translation
		});
		oneQuestionAndAnswers.question = {
			id: _id,
			sourceText: sourceText,
			translation: translation
		}
		const copyArray = shuffledData
		copyArray.splice(i, 1)
		const random = shuffle(copyArray);
		for(let j = 0; j < 3 && j < random.length - 1; j++){
			const { _id, sourceText, translation } = random[j];
			splitAnswerData.push({
				id: _id,
				sourceText: sourceText,
				translation: translation
			});
		}

		oneQuestionAndAnswers.answers = shuffle(splitAnswerData)

		questionsAndAnswersData.push(oneQuestionAndAnswers)
		
	}

	return questionsAndAnswersData
};

type MultipleChoiceData = {
	id: string;
	sourceText: string;
	translation: string;
};

type DataToSplit = {
	id: string;
	text: string;
}[];
