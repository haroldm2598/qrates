import { StaticImageData } from 'next/image';

interface TestimonalImageProps {
	ImageSource: StaticImageData;
}

export default function TestimonalImage({ ImageSource }: TestimonalImageProps) {
	return (
		<>
			<img
				src={ImageSource.src}
				alt='artist image'
				className='block h-[40rem] lg:h-[50rem] w-full object-cover'
			/>
		</>
	);
}
