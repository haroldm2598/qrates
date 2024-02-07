import { gridCardProps } from '../../../lib/types/definitions';

export default function GridCard({
	title,
	description,
	imageSource
}: gridCardProps) {
	return (
		<>
			<h1 className='text-black text-4xl lg:text-[2.5rem] font-bold'>
				{title}
			</h1>
			<p className='mx-auto my-10 w-full lg:w-[30rem] text-black text-lg lg:text-xl leading-6'>
				{description}
			</p>
			<img
				src={imageSource.src}
				alt='formats image'
				className='mx-auto w-96 h-60 object-contain'
			/>
		</>
	);
}
