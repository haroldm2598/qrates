'use client';
import { useAppSelector } from '@/lib/redux/store';

export default function GridImage() {
	const { gridImg } = useAppSelector((state) => state.homeTemplate);

	return (
		<div className='grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-[0.125rem] bg-black'>
			{gridImg.map((item, index) => {
				return (
					<img
						key={index}
						src={item.imgSrc.src}
						alt='carousel image'
						className='block'
					/>
				);
			})}
		</div>
	);
}
