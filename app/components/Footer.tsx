import { Fragment } from 'react';
import {
	FaFacebook,
	FaSquareInstagram,
	FaSquareTwitter
} from 'react-icons/fa6';
import imgLogo from '@/app/assets/images/qrates-logo-footer.svg';

export default function Footer() {
	const footerLink = [
		{
			title: 'for artists',
			links: [
				'For Artists',
				'How it Works',
				'Artist Toolkit',
				'Referral Program'
			]
		},
		{
			title: 'for fans',
			links: ['For Fans', 'Records', 'Cassettes', 'Stories', 'Qrates Curated']
		},
		{
			title: 'our company',
			links: ['About Qrates', 'Careers', 'Partners']
		},
		{
			title: 'help',
			links: ['Support Center', 'Contact Us', 'Returns', 'Shipping']
		}
	];
	const Icons = [
		{ Icon: FaFacebook },
		{ Icon: FaSquareInstagram },
		{ Icon: FaSquareTwitter }
	];
	const policies = ['Terms of service', 'Privacy Policy', 'Legal Information'];

	return (
		<footer className='bg-black'>
			<div className='max-w-7xl mx-auto py-20 px-8 lg:px-0'>
				<div className='mb-52 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-10 lg:gap-2'>
					{footerLink.map((item, index) => {
						return (
							<ul key={index}>
								<li className='text-white text-xl font-bold uppercase mb-2'>
									{item.title}
								</li>
								{item.links.map((contents, index) => (
									<li key={index} className='text-white text-xl leading-9'>
										{contents}
									</li>
								))}
							</ul>
						);
					})}
				</div>

				<div className='flex flex-col md:flex-row justify-between items-center gap-20 lg:gap-0'>
					<img src={imgLogo.src} alt='qrates logo' />

					<div className='flex flex-col items-center md:items-end gap-4'>
						<button className='w-full lg:w-52 btn btn-outline text-white rounded-none'>
							English
						</button>

						<div className='flex'>
							{Icons.map((icon, index) => {
								const Icon = icon.Icon;

								return (
									<div key={index} className='[&>*]:ml-4'>
										<Icon className='h-8 w-8 text-white' />
									</div>
								);
							})}
						</div>

						<ul className='flex flex-wrap gap-8'>
							{policies.map((item, index) => {
								return (
									<li key={index} className='text-white text-sm font-bold'>
										{item}
									</li>
								);
							})}

							<li className='mx-auto text-white text-sm font-bold'>
								© TDMS Inc.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
