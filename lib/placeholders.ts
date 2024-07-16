import { CollectionItem, Story, Video } from "./definitions";

export const collection: CollectionItem[] = [
  {
    _id: "1",
    sourceText: "Hello, how are you?",
    translation: "Xin chào, bạn khỏe không?"
  },
  {
    _id: "2",
    sourceText: "What is your name?",
    translation: "Tên bạn là gì?"
  },
  {
    _id: "3",
    sourceText: "I love programming.",
    translation: "Tôi yêu lập trình."
  },
  {
    _id: "4",
    sourceText: "This is a beautiful day.",
    translation: "Hôm nay là một ngày đẹp."
  },
  {
    _id: "5",
    sourceText: "Can you help me?",
    translation: "Bạn có thể giúp tôi không?"
  },
  {
    _id: "6",
    sourceText: "Where is the nearest restaurant?",
    translation: "Nhà hàng gần nhất ở đâu?"
  },
  {
    _id: "7",
    sourceText: "I am learning Vietnamese.",
    translation: "Tôi đang học tiếng Việt."
  },
  {
    _id: "8",
    sourceText: "How much does this cost?",
    translation: "Cái này giá bao nhiêu?"
  },
  {
    _id: "9",
    sourceText: "Thank you for your help.",
    translation: "Cảm ơn bạn đã giúp đỡ."
  },
  {
    _id: "10",
    sourceText: "Good morning!",
    translation: "Chào buổi sáng!"
  }
]

export const videoList: Video[] = [
  {
    _id: "https://www.youtube.com/watch?v=oqGuJhOeMek",
    videoId: "oqGuJhOeMek",
    caption: "Cell vs. virus: A battle for health - Shannon Stiles",
    thumbnail: "https://i3.ytimg.com/vi/oqGuJhOeMek/maxresdefault.jpg",
    channel: "TED-ed",
    duration: 238,
    level: "Intermediate",
    category: "Health",
    transcripts: [

    ],
    isPremium: false,
  },
  {
    _id: "https://www.youtube.com/watch?v=ER0Cu0KQFqM",
    videoId: "ER0Cu0KQFqM",
    caption: "Who were the Vestal Virgins, and what was their job? - Peta Greenfield",
    thumbnail: "https://i3.ytimg.com/vi/ER0Cu0KQFqM/maxresdefault.jpg",
    channel: "TED-ed",
    duration: 200,
    level: "Beginner",
    category: "History",
    transcripts: [

    ],
    isPremium: false,
  },
  {
    _id: "https://www.youtube.com/watch?v=z-IR48Mb3W0",
    videoId: "z-IR48Mb3W0",
    caption: "What is depression? - Helen M. Farrell",
    thumbnail: "https://i3.ytimg.com/vi/z-IR48Mb3W0/maxresdefault.jpg",
    channel: "TED-ed",
    duration: 120,
    level: "Beginner",
    category: "Education",
    transcripts: [

    ],
    isPremium: false,

  },
]

export const storyList: any[] = [
  {
    display_image: "https://img.freepik.com/premium-photo/summer-with-sunflower-field-anime-art-style_685067-1842.jpg",
    title: "Sunflowers at sunset",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    description: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
  {
    display_image: "https://e1.pxfuel.com/desktop-wallpaper/321/39/desktop-wallpaper-sakura-blossom-petals-scenery-sky-cherry-cherry-blossom-anime-aesthetic.jpg",
    title: "Spring with blue sky",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    description: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
  {
    display_image: "https://st2.depositphotos.com/2769299/9083/i/450/depositphotos_90835898-stock-photo-dark-mysterious-street.jpg",
    title: "Maze of Shadows",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    description: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
  {
    display_image: "https://w0.peakpx.com/wallpaper/146/116/HD-wallpaper-anime-original-sky-snow-winter.jpg",
    title: "Alone in snow",
    lastUpdated: "Jan 08, 2024",
    length: 10,
    description: "In Noirville, Detective Alex Mercer navigates a perilous maze in a deserted warehouse...",
    level: 3,
    topic: "Mystery",
  },
]

export const chartData = [
  {
    name: 'Feb',
    total: 0
  },
  {
    name: 'Mar',
    total: 0
  },
  {
    name: 'Apr',
    total: 0
  },
  {
    name: 'May',
    total: 0
  },
  {
    name: 'Jun',
    total: 500000
  },
  {
    name: 'July',
    total: 1250000
  },
];
