'use client'
import Flashcard from '@/app/game/game/flashcard';
import { GameContext } from '@/providers/game';
import { useContext } from 'react';
import useSWR from 'swr';
const GamePage = () => {

  const {chosenCollection} = useContext(GameContext)
  
  const {data} = useSWR('/vocabularies/' + chosenCollection)

  

  return (
    <div className='text-black'>
      <Flashcard data={data}/>
    </div>
  )
}

export default GamePage