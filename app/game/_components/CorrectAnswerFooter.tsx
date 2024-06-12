import { Button } from '@/components/ui/button';
import { Typography } from '@material-tailwind/react';
import React from 'react';

type Props = {
    shown: boolean,
    onClick: ()=>void,

};

const CorrectAnswerFooter = (props: Props) => {
    const {onClick, shown} = props

    const handleOnClick = () => {
        if(onClick){
            onClick()
        }
    }

    if (!shown) return ""

	return (
		<div className='fixed bottom-0 left-0 h-48 flex items-center justify-between w-full bg-tertiary z-10 py-10 px-[25vw] border-t'>
			<Typography variant='h4' className='text-green-600'>Correct!</Typography>
            <button onClick={handleOnClick} className='bg-primary font-semibold text-lg px-10 py-4 rounded-md shadow-md hover:bg-green-500 transition-colors duration-300 uppercase'>
                Continue
            </button>
		</div>
	);
};

export default CorrectAnswerFooter;
