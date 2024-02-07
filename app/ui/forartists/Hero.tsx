import ImageTilt from '@/app/ui/components/ImageTilt';
import HeroImg from '@/app/assets/images/forartist/hero.avif';
import HeroImg2 from '@/app/assets/images/forartist/hero1.avif';
import SubImg from '@/app/assets/images/forartist/paid.svg';

export default function Hero() {
	return (
		<section className='bg-black'>
			<div className='max-w-7xl lg:h-full mx-auto pt-20 px-5 lg:px-0 grid lg:grid-cols-2'>
				<aside className='self-start w-full grid gap-8'>
					<button className='justify-self-start btn btn-outline text-white uppercase rounded-none'>
						for artists
					</button>

					<h1 className='lg:w-[35rem] text-white text-[2.75rem] md:text-[4rem] leading-[2.75rem] md:leading-[4.25rem] lg:font-bold'>
						Music in your hands. Without the barriers.
					</h1>
					<p className='lg:w-[35rem] text-white text-[1.375rem] md:text-[1.625rem] lg:text-[1.75rem] leading-6 md:leading-8 lg:leading-[2.125rem]'>
						Full-service production, a global retail network, customer support -
						and you keep up to 85% of profits. ↓
					</p>
				</aside>

				<main className='h-full relative mt-20 lg:mt-0'>
					<ImageTilt
						mainImg={HeroImg.src}
						subImg={SubImg.src}
						rotateMain='max-w-[180px] lg:max-h-screen relative z-10 left-[30%] lg:left-0 rotate-[10deg]'
						customPosSub='left-[50%] lg:left-[-10%]'
					/>

					<ImageTilt
						mainImg={HeroImg2.src}
						rotateMain='max-w-[180px] lg:max-h-screen relative z-0 top-[-20%] left-[10%] lg:left-[-60%] rotate-[-10deg]'
					/>
				</main>
			</div>
		</section>
	);
}
