import { StaticImageData } from 'next/image';

interface forImageTilt {
	mainImg: string;
	subImg: string;
	rotateMain: string;
}
export default function ImageTilt({
	mainImg,
	subImg,
	rotateMain
}: forImageTilt) {
	return (
		<>
			<img
				src={mainImg}
				alt='hero image'
				className={`max-w-[250px] lg:max-w-[550px] max-h-[75vh] border-2 border-solid border-black ${rotateMain}`}
			/>

			<img
				src={subImg}
				alt='okay'
				className='absolute top-[40%] left-[-10%] z-1 w-20 h-20 lg:w-36 lg:h-36'
			/>
		</>
	);
}
