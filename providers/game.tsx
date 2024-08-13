import { Dispatch, SetStateAction, createContext } from 'react';

export const GameContext = createContext<GameContextProps>({
  chosenCollection: '',
  setChosenCollection: ()=>{},
});


interface GameContextProps {
  chosenCollection: string,
  setChosenCollection: Dispatch<SetStateAction<string>>
}
