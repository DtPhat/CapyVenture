import { CollectionItem, Story, Video } from "./definitions";

export const collection: CollectionItem[] = [
  {
    id: 1,
    sourceText: "Hello, how are you?",
    translation: "Xin chào, bạn khỏe không?"
  },
  {
    id: 2,
    sourceText: "What is your name?",
    translation: "Tên bạn là gì?"
  },
  {
    id: 3,
    sourceText: "I love programming.",
    translation: "Tôi yêu lập trình."
  },
  {
    id: 4,
    sourceText: "This is a beautiful day.",
    translation: "Hôm nay là một ngày đẹp."
  },
  {
    id: 5,
    sourceText: "Can you help me?",
    translation: "Bạn có thể giúp tôi không?"
  },
  {
    id: 6,
    sourceText: "Where is the nearest restaurant?",
    translation: "Nhà hàng gần nhất ở đâu?"
  },
  {
    id: 7,
    sourceText: "I am learning Vietnamese.",
    translation: "Tôi đang học tiếng Việt."
  },
  {
    id: 8,
    sourceText: "How much does this cost?",
    translation: "Cái này giá bao nhiêu?"
  },
  {
    id: 9,
    sourceText: "Thank you for your help.",
    translation: "Cảm ơn bạn đã giúp đỡ."
  },
  {
    id: 10,
    sourceText: "Good morning!",
    translation: "Chào buổi sáng!"
  }
]

export const videoList: Video[] = [
  {
    url: "https://www.youtube.com/watch?v=oqGuJhOeMek",
    title: "Cell vs. virus: A battle for health - Shannon Stiles",
    thumbnail: "https://i3.ytimg.com/vi/oqGuJhOeMek/maxresdefault.jpg",
    channel: "TED-ed",
    duration: "3:58",
    level: 3,
    topic: "Health"
  },
  {
    url: "https://www.youtube.com/watch?v=ER0Cu0KQFqM",
    title: "Who were the Vestal Virgins, and what was their job? - Peta Greenfield",
    thumbnail: "https://i3.ytimg.com/vi/ER0Cu0KQFqM/maxresdefault.jpg",
    channel: "TED-ed",
    duration: "4:33",
    level: 3,
    topic: "History"
  },
  {
    url: "https://www.youtube.com/watch?v=z-IR48Mb3W0",
    title: "What is depression? - Helen M. Farrell",
    thumbnail: "https://i3.ytimg.com/vi/z-IR48Mb3W0/maxresdefault.jpg",
    channel: "TED-ed",
    duration: "4:28",
    level: 3,
    topic: "Education"
  },
]

export const storyList: any[] = [
  {
    image: "https://img.freepik.com/premium-photo/summer-with-sunflower-field-anime-art-style_685067-1842.jpg",
    title: "Sunflowers at sunset",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    summary: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
  {
    image: "https://e1.pxfuel.com/desktop-wallpaper/321/39/desktop-wallpaper-sakura-blossom-petals-scenery-sky-cherry-cherry-blossom-anime-aesthetic.jpg",
    title: "Spring with blue sky",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    summary: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
  {
    image: "https://st2.depositphotos.com/2769299/9083/i/450/depositphotos_90835898-stock-photo-dark-mysterious-street.jpg",
    title: "Maze of Shadows",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    summary: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
]