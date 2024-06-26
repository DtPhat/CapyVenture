'use server'
import { BASE_URL } from "../constants";

export const getVideos = async (title: string, level: string, category: string) => {
  console.log(`${BASE_URL}/video?title=${title}&category=${category}&level=${level}`)
  try {
    const response = await fetch(
      `${BASE_URL}/video?size=100&title=${title}&category=${category}&level=${level}`, {
        next: {
          revalidate: 60,
          tags: ['story']
        }
      })
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getVideo = async (id: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/video/${id}`, {
      next: {
        revalidate: 60,
        tags: ['story']
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}