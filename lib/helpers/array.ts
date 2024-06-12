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

type DataToSplit = {
	id: string;
	text: string;
}[];
