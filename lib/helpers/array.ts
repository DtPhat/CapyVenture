import { CollectionItem } from "@/lib/definitions";
import shuffle from "lodash/shuffle";

export const splitAndShuffleCollection = (data: CollectionItem[]) => {
  const slitData: DataToSplit = []
  data.forEach(item => {
    const { id, sourceText, translation } = item
    slitData.push(
      {
        id,
        text: sourceText,
      },
      {
        id,
        text: translation,
      }
    )
  });
  return shuffle(slitData)
}

type DataToSplit = {
  id: string,
  text: string
}[]