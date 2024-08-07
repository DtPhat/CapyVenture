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

// export const BASE_URL = "https://capyventure.eastasia.cloudapp.azure.com"
// export const BASE_URL = "http://localhost:4000"
// export const BASE_URL = "https://capy-venture-b9cddebcczdca3gw.eastus-01.azurewebsites.net"
export const BASE_URL = "https://capynest.onrender.com"

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

export const restrictedRoutes = {
  authentication: ['/game/flashcard', '/game/multiple-choice', '/game/matching', '/game/word-guessing', '/collections', '/account'],
  premium: ['/game/word-guessing', '/game/multiple-choice']
}
