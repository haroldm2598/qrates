import { StaticImageData } from 'next/image';

interface forImageTilt {
	mainImg: string;
	subImg?: string | undefined;
	rotateMain: string;
	customPosSub?: string | undefined;
}
export default function ImageTilt({
	mainImg,
	subImg,
	rotateMain,
	customPosSub
}: forImageTilt) {
	return (
		<>
			<img
				src={mainImg}
				alt='hero image'
				className={`max-w-[250px] lg:max-w-[550px] max-h-[75vh] border-2 border-solid border-black ${rotateMain}`}
			/>

			{subImg && (
				<img
					src={subImg}
					alt='okay'
					className={`${customPosSub} absolute top-[40%] left-[-10%] z-20 w-20 h-20 lg:w-36 lg:h-36`}
				/>
			)}
		</>
	);
}
