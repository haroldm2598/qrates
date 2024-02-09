import ImageTilt from '../components/ImageTilt';
import imgSrc from '@/app/assets/images/forfans/hero.avif';

export default function Hero() {
	return (
		<section className='my-10 px-4 lg:my-20 lg:px-16 grid lg:grid-cols-2 gap-20 lg:gap-0'>
			<aside className='[&>*]:mb-6'>
				<button className='justify-self-start btn btn-outline text-black uppercase rounded-none'>
					for artists
				</button>

				<h1 className='lg:w-[35rem] text-black text-[2.75rem] md:text-[4rem] leading-[2.75rem] md:leading-[4.375rem] lg:font-bold'>
					Music community and platform for people who love analog media
				</h1>
				<p className='last:mb-0 lg:w-[35rem] text-black text-[1.375rem] md:text-[1.625rem] lg:text-[1.75rem] leading-6 md:leading-8 lg:leading-[2.25rem]'>
					Qrates has grown by meeting the diverse needs of artists and fans of
					analog media, and in the process has returned greater profits to the
					community. Our goal is to bring artists and fans together through
					Qrates, and help the music community thrive and evolve.
				</p>
			</aside>

			<main>
				<ImageTilt
					mainImg={imgSrc.src}
					rotateMain='max-w-[550px] md:max-h-[100vh] mx-auto rotate-[-10deg]'
				/>
			</main>
		</section>
	);
}
