import gridImg1 from '@/app/assets/images/home/grid1.avif';
import gridImg2 from '@/app/assets/images/home/grid2.avif';
import gridImg3 from '@/app/assets/images/home/grid3.avif';
import gridImg4 from '@/app/assets/images/home/grid4.avif';
import gridImg5 from '@/app/assets/images/home/grid5.avif';
import gridImg6 from '@/app/assets/images/home/grid6.avif';
import gridImg7 from '@/app/assets/images/home/grid7.avif';
import gridImg8 from '@/app/assets/images/home/grid8.avif';

export default function GridImage() {
	const arrImg = [
		{ imgSrc: gridImg1 },
		{ imgSrc: gridImg2 },
		{ imgSrc: gridImg3 },
		{ imgSrc: gridImg4 },
		{ imgSrc: gridImg5 },
		{ imgSrc: gridImg6 },
		{ imgSrc: gridImg7 },
		{ imgSrc: gridImg8 }
	];

	return (
		<div className='grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-[0.125rem] bg-black'>
			{arrImg.map((item, index) => {
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
