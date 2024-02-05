import heroImg from '@/app/assets/images/home/heroImage.avif';
import imgSrc from '@/app/assets/images/home/fast.png';
import ImageTilt from '../components/ImageTilt';

export default function Forartist() {
	return (
		<section className='homeArtist'>
			<div className='max-w-7xl mx-auto p-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-28'>
				<div className='max-w-lg mx-auto lg:mx-0 relative'>
					<ImageTilt
						mainImg={heroImg.src}
						subImg={imgSrc.src}
						rotateMain='rotate-[-10deg]'
					/>
				</div>

				<div className='max-w-2xl mx-auto lg:mx-0 flex flex-col items-start gap-5 lg:gap-10 '>
					<button className='btn btn-outline bg-white text-base font-bold uppercase rounded-none'>
						for artist
					</button>

					<h1 className='w-full lg:w-[38rem] text-4xl font-bold leading-[2.5rem]'>
						Your music on vinyl and cassette, direct to your fans.
					</h1>
					<p className='text-[1.375rem] lg:text-3xl leading-6 lg:leading-9'>
						Qrates is a one-stop platform for your vinyl record and cassette
						production, logistics, sales, and distribution. We take away the
						burden of hassle, cost, and risk, and return more time and revenue
						to artists and labels.
					</p>

					<button className='self-stretch w-full lg:w-56 btn btn-neutral text-base font-bold uppercase rounded-full'>
						for artist
					</button>
				</div>
			</div>
		</section>
	);
}
