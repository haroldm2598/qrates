import ArtistImage from '@/app/assets/images/home/artistImage.avif';
import ArtistImage2 from '@/app/assets/images/forartist/customersupport.avif';
import Info from '../components/forartist/Info';

export default function ArtistResources() {
	return (
		<section className='grid lg:grid-cols-2'>
			<div className='artistResource1 p-10 text-center [&>*]:mb-8 border-[1px] border-black '>
				<img
					src={ArtistImage.src}
					alt='Artist Resource'
					className='block w-full h-80 object-cover border-2 border-black'
				/>

				<Info
					btnName='artist toolkit'
					title='Take you and your works to next level.'
					desc='We have a lot of informations and tips about music production, physical format and music business for you.'
				/>
				<button className='w-full lg:w-56 btn btn-neutral bg-black text-white uppercase rounded-full'>
					learn more
				</button>
			</div>

			<div className='artistResource2 p-10 text-center [&>*]:mb-8 border-[1px] border-black'>
				<img
					src={ArtistImage2.src}
					alt='Artist Resource'
					className='block w-full h-80 object-cover border-2 border-black'
				/>

				<Info
					btnName='artist toolkit'
					title='Take you and your works to next level.'
					desc='We have a lot of informations and tips about music production, physical format and music business for you.'
				/>
				<button className='w-full lg:w-56 btn btn-neutral bg-black text-white uppercase rounded-full'>
					learn more
				</button>
			</div>
		</section>
	);
}
