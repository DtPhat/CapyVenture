import { LEVEL_NUMBERS } from "./constants"

export type CollectionItem = {
  _id: string,
  sourceText: string,
  translation: string,
  collection?: string
}

export type Collection = {
  id: string
  accountId: string,
  name: string,
  picture: string,
  totalVocab?: number,
  description: string
}
export type Transcript = {
  sentence: string,
  timestamp: number,
  translation: string 
}

export type Video = {
  _id: string,
  videoId: string,
  category: string,
  thumbnail: string,
  duration: number,
  caption: string,
  channel: string,
  level: string,
  transcripts: Transcript[]
}

// export type Story = {
//   image: string,
//   title: string,
//   lastUpdated: string,
//   length: number,
//   summary: string,
//   level?: number,
//   topic?: string,
// }


export type Story = {
  _id: string,
  title: string,
  author: string,
  views: number,
  description: string,
  contents: {
    chapter: number,
    title: string,
    text: string
  }[],
  display_image: string,
  category?: string,
  comment?: []
  level?: string
}


export type Level = keyof typeof LEVEL_NUMBERS;
