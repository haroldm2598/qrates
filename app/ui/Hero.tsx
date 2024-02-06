import heroImg from '@/app/assets/images/home/heroImage.avif';
import imgSrc from '@/app/assets/images/home/ok.png';
import ImageTilt from '../components/ImageTilt';

// the problem with the hero content
// is not responsive with the content relative absolute in large screen only appears in extra large screen

export default function Hero() {
	return (
		<section className='mb-10 p-4 lg:px-8 lg:py-4 flex flex-col lg:flex-row gap-28'>
			<div className='max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-10 text-center lg:text-start '>
				<h1 className='lg:w-[28rem] text-5xl lg:text-7xl font-bold leading-[3rem] lg:leading-[4.375rem]'>
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
				<ImageTilt
					mainImg={heroImg.src}
					subImg={imgSrc.src}
					rotateMain='rotate-[10deg]'
				/>

				<h1 className='absolute top-[50%] right-[-35%] lg:right-[-80%] text-base font-bold rotate-90'>
					<span className='underline'>MAYAEWKIS</span> ON QRATES
				</h1>
			</div>
		</section>
	);
}
