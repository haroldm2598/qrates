import heroImg from '@/app/assets/images/home/heroImage.avif';
import imgSrc from '@/app/assets/images/home/ok.png';

export default function Hero() {
	return (
		<section className='p-4 lg:px-8 lg:py-4 flex flex-col lg:flex-row gap-28'>
			<div className='max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-10 text-center lg:text-start '>
				<h1 className='w-[28rem] text-7xl font-bold leading-[4.375rem]'>
					QRATES MUSIC IN YOUR HANDS
				</h1>
				<p className='text-3xl leading-9'>
					We make it easy for artists to make vinyl and cassettes, so fans can
					keep pieces of the music they love ↓
				</p>
				<div className='self-stretch flex flex-col lg:flex-row gap-4'>
					<button className='w-full lg:w-56 btn btn-outline text-base font-bold uppercase rounded-full'>
						for fans
					</button>
					<button className='w-full lg:w-56 btn btn-neutral text-base font-bold uppercase rounded-full'>
						for artist
					</button>
				</div>
			</div>

			<div className='max-w-lg mx-auto lg:mx-0 relative'>
				<img
					src={heroImg.src}
					alt='hero image'
					className='max-w-[330px] lg:max-w-[550px] max-h-[75vh] rotate-[10deg] border-2 border-solid border-black'
				/>

				<img
					src={imgSrc.src}
					alt='okay'
					className='absolute top-[40%] left-[-10%] z-1 w-36 h-36'
				/>

				<h1 className='absolute top-[50%] right-[-35%] lg:right-[-80%] text-base font-bold rotate-90'>
					<span className='underline'>MAYAEWKIS</span> ON QRATES
				</h1>
			</div>
		</section>
	);
}
