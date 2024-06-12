import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const GameContext = createContext<GameContextProps>({
  chosenCollection: '',
  setChosenCollection: ()=>{},
});

// export const GameProvider = ({ children }: { children: ReactNode }) => {
//   const [chosenCollection, setChosenCollection] = useState('')
//   return (
//     <GameContext.Provider value={{ chosenCollection, setChosenCollection }}>
//       {children}
//     </GameContext.Provider>
//   )
// }


interface GameContextProps {
  chosenCollection: string,
  setChosenCollection: Dispatch<SetStateAction<string>>
}
