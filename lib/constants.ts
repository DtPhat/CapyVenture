import 'dotenv/config'
export const ENGLISH_LEVELS = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Advanced",
  "Proficiency"
]

export const LEVEL_NUMBERS = {
  "Beginner": 1,
  "Elementary": 2,
  "Intermediate": 3,
  "Advanced": 4,
  "Proficiency": 5
}

export const BASE_URL = "http://localhost:4000"

// process.env.NODE_ENV === "development"
//   ? `http://localhost:4000`
//   : "https://capyventure.eastasia.cloudapp.azure.com"


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

export const subscriptionPlans = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  LIFETIME: "LIFETIME"
}