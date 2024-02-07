'use client';
import { useAppSelector } from '@/lib/redux/store';
import imgLogo from '@/app/assets/images/qrates-logo-footer.svg';

export default function Footer() {
	const { footerLinks, socialIcons, policies } = useAppSelector(
		(state) => state.homeTemplate
	);

	return (
		<footer className='bg-black'>
			<div className='max-w-7xl mx-auto py-20 px-8 lg:px-0'>
				<div className='mb-52 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-10 lg:gap-2'>
					{footerLinks.map((item, index) => {
						return (
							<ul key={index}>
								<li className='text-white text-xl font-bold uppercase mb-2'>
									{item.title}
								</li>
								{item.itemLink.map((contents, index) => (
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
							{socialIcons.map((icon, index) => {
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
