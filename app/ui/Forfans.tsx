import Link from 'next/link';
import { links } from '@/app/ui/types/definitions';

export default function Forfans() {
	// hover a link then chage it's bg img source
	const linkFans: Array<links> = [
		{ name: 'Records', path: '/', bgImg: 'bgBlack' },
		{ name: 'Cassettes', path: '/', bgImg: '' },
		{ name: 'Stories', path: '/', bgImg: '' },
		{ name: 'Qrates Curated', path: '/', bgImg: '' }
	];

	return (
		<div className='bg-forfans bg-cover bg-center max-w-full h-[70vh] lg:h-[90vh] p-4 lg:p-8 flex flex-col justify-between items-start'>
			<button className='btn btn-outline text-sm font-bold text-white uppercase rounded-none'>
				for fans
			</button>

			<ul>
				{linkFans.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.path}>
								<span className='text-white text-4xl lg:text-6xl lg:leading-[4.25rem] font-bold hover:underline'>
									{link.name}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>

			<h1 className=' text-white text-xl leading-7'>
				The latest from the Qrates Community
			</h1>
		</div>
	);
}
