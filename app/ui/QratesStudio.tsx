'use client';
import { useAppSelector } from '@/lib/redux/store';
import { Carousel } from 'flowbite-react';

export default function QratesStudio() {
	const { qratesCarousel } = useAppSelector((state) => state.homeTemplate);

	return (
		<section className='bg-black'>
			<div className='max-w-3xl w-full mx-auto px-4 py-10 text-center'>
				<button className='btn btn-outline text-white font-bold uppercase rounded-none'>
					try it now
				</button>

				<div className='my-5'>
					<h1 className='mb-4 text-4xl font-bold text-white'>
						Make it real with Qrates Studio
					</h1>
					<p className='text-lg leading-6 lg:text-xl lg:leading-7 text-white'>
						Design the look and feel of your vinyl and cassette and use the
						profit calculator to immediately see how much your project will
						cost, and how much you'll earn.
					</p>
				</div>

				<div className='my-2 w-96 h-96 mx-auto'>
					<Carousel indicators={false} slideInterval={1000}>
						{qratesCarousel.map((item, index) => {
							return (
								<img
									key={index}
									src={item.imgSrc.src}
									alt='carousel image'
									className='block w-full h-full object-contain '
								/>
							);
						})}
					</Carousel>
				</div>

				<button className='w-full lg:w-72 btn btn-warning font-bold uppercase rounded-full'>
					try it now
				</button>
			</div>
		</section>
	);
}
