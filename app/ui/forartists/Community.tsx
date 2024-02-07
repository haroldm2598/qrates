import Info from '../components/forartist/Info';

export default function Community() {
	return (
		<section className='max-w-2xl mx-auto px-5 lg:px-0 py-20 text-center [&>*]:mb-4'>
			<Info
				btnName='community'
				title='Join a growing community.'
				desc="We're building a home for the next generation vinyl lovers and cassette junkies. Get in front of fans, connect with artists, labels and stores."
			/>
			<button className='w-full lg:w-56 btn btn-neutral bg-white text-black uppercase rounded-full'>
				read more stories
			</button>
		</section>
	);
}
