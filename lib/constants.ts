import 'dotenv/config'
export const ENGLISH_LEVELS = [
  "1 - Beginner",
  "2 - Elementary",
  "3 - Intermediate",
  "4 - Advanced",
  "5 - Proficiency"
]

export const LEVEL_NUMBERS = {
  "Beginner": 1,
  "Elementary": 2,
  "Intermediate": 3,
  "Advanced": 4,
  "Proficiency": 5
}

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000`
    : "https://api-host-name"


export const collectionPictures = [
  '/collections/books.png',
  '/collections/apple.png',
  '/collections/basketball-ball.png',
  '/collections/bell.png',
  '/collections/globe.png',
  '/collections/graduate-hat.png',
  '/collections/paint-board.png',
  '/collections/trophy.png',
  '/collections/glassware.png',
  '/collections/calendar.png',
]