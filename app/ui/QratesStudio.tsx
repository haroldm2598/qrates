import carouselImg from '@/app/assets/images/home/sample_female-a4d2352d.png';
// make an array for carousel image auto play

export default function QratesStudio() {
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

				<div className='my-2'>
					<img
						src={carouselImg.src}
						alt='carousel image'
						className='block w-96 h-96 object-contain mx-auto'
					/>
				</div>

				<button className='w-full lg:w-72 btn btn-warning font-bold uppercase rounded-full'>
					try it now
				</button>
			</div>
		</section>
	);
}
