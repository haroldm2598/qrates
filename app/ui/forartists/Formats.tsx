import formatImg from '@/app/assets/images/home/sample_bombay-668a0fa8.png';
import formatImg2 from '@/app/assets/images/forartist/cassette.avif';
import GridCard from '@/app/ui/components/GridCard';

export default function Formats() {
	return (
		<>
			<section className='musicGroup1 py-10'>
				<h1 className='px-5 lg:py-10 text-black text-4xl font-bold text-center'>
					Choose from two formats with promised quality
				</h1>

				<div className='mt-5 grid lg:grid-cols-2'>
					{/* gridCard Component name */}
					<div className='p-5 text-center border-t-2 lg:border-r-2 border-black'>
						<GridCard
							title='Vinyl'
							description='We know how special pressed records are to you. Our products are
						built for fans, by fans. We make it easy for artists to press vinyl,
						so the music you love can keep reaching ears in the most beautiful
						way.'
							imageSource={formatImg}
						/>
					</div>

					<div className='p-5 text-center border-t-2 border-black'>
						<GridCard
							title='Cassette'
							description='Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.'
							imageSource={formatImg2}
						/>
					</div>
				</div>
			</section>

			<section className='p-10 lg:py-20 lg:px-0 bg-black text-center'>
				<h1 className='text-white text-[2.75rem] leading-[2.75rem] lg:text-[4rem] lg:leading-[4.25rem] font-bold'>
					You make music. We do the rest.
				</h1>
			</section>
		</>
	);
}
