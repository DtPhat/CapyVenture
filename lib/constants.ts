import 'dotenv/config'
export const ENGLISH_LEVELS = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Advanced",
  "Proficiency"
]

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:4000`
    : "https://api-host-name"