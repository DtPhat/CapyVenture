'use server'
import { BASE_URL } from "../constants";

export const getStories = async (title: string, level: string, category: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/stories?size=100&title=${title}&category=${category}&level=${level}`, {
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

export const getStory = async (id: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/stories/${id}`, {
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