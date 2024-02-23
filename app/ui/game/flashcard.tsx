'use client'
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Stepper, Step, Progress } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ButtonIcon from '../common/button-icon';


const Flashcard = () => {
  const [flip, setFlip] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const styles = {
    card: `bg-secondary text-black w-[52rem] h-96 rounded-xl cursor-pointer flex justify-center items-center font-semibold shadow-md text-xl transition-transform duration-100`
  }

  let data = [
    {
      question: 'With adrenaline pumping through his veins',
      answer: ' Với adrenaline chảy trong huyết quản'
    },
    {
      question: 'Cat',
      answer: 'Con Mèo'
    },
  ]

  let isLastStep = activeStep == data.length - 1
  let isFirstStep = activeStep == 0
  const handleNext = () => {
    !(isLastStep) && setActiveStep((cur) => cur + 1)
  };
  const handlePrev = () => {
    !(isFirstStep) && setActiveStep((cur) => cur - 1)
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div>
        <div onClick={() => setFlip(!flip)} >
          <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div className={styles.card}>
              {data.at(activeStep)?.question}
            </div>
            <div className={styles.card}>
              {data.at(activeStep)?.answer}
            </div>
          </ReactCardFlip>
        </div>
        <Progress value={((activeStep + 1) / data.length) * 100} className='mt-4' size='sm'/>
      </div>
      <div className="w-full py-4 flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-6 items-center">
          <ButtonIcon Icon={<ChevronLeftIcon className='w-6 h-6' />} iconDirection='left' text='PREV' onClick={handlePrev} />
          <div className='font-semibold text-2xl'>{activeStep + 1} / {data.length}</div>
          <ButtonIcon Icon={<ChevronRightIcon className='w-6 h-6' />} iconDirection='right' text='NEXT' onClick={handleNext} />
        </div>
      </div>
    </div >

  );
};
export default Flashcard;