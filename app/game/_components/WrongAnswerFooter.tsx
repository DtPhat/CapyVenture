import { Typography } from '@material-tailwind/react';
import React from 'react';

type Props = {
    shown: boolean,
    onClick: ()=>void,
};

const WrongAnswerFooter = (props: Props) => {
	const { onClick, shown } = props;

	const handleOnClick = () => {
		if (onClick) {
			onClick();
		}
	};

	if (!shown) return '';

	return (
		<div className='fixed bottom-0 left-0 h-48 flex items-center justify-between w-full bg-red-100 z-10 py-10 px-[25vw] border-t'>
			<Typography variant='h4' className='text-red-700'>
				Wrong.
			</Typography>
			<button
				onClick={handleOnClick}
				className='bg-red-600 font-semibold text-lg px-10 py-4 rounded-md shadow-md hover:bg-red-400 transition-colors duration-300 uppercase'
			>
				Try again
			</button>
		</div>
	);
};

export default WrongAnswerFooter;
