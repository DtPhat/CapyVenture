export type CollectionItem = {
  id: number
  sourceText: string,
  translation: string
}

export type Video = {
  url: string,
  title: string,
  thumbnail: string,
  channel: string,
  duration: string,
  level?: number
  topic?: string
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
