'use client';
import { useAppSelector } from '@/lib/redux/store';
import Info from '../components/forartist/Info';
import ArrowDown from '../components/forartist/ArrowDown';
import MusicDetails from '../components/forartist/MusicDetails';

import imgSrc from '@/app/assets/images/forartist/qratesalbum6.avif';
import { Fragment } from 'react';

export default function MusicInfo() {
	const { makeMusicList } = useAppSelector((state) => state.artistTemplate);

	return (
		<>
			{/* desktop view */}

			<section className='musicInfo min-h-full max-w-full hidden lg:grid grid-cols-[1fr,_50px,_1fr] gap-10'>
				<section className='text-center p-4'>
					<div className='w-[30rem] mx-auto'>
						<Info
							btnName='you'
							title='Focus on making music'
							desc='You can focus on your music production with peace of mind: the
						Artist Toolkit has lots of information about music production,
						knowledge about vinyl records and cassettes, and tips on how to sell
						your music. Artist Toolkit'
						/>
					</div>
				</section>

				<div className='mx-auto py-10 text-center relative'></div>

				<section className='p-4 text-center'>
					<div className='w-[30rem] mx-auto'>
						<Info
							btnName='qrates'
							title="We'll take care of the hassle"
							desc='Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.'
						/>
					</div>
				</section>

				<div className='justify-self-end'>
					{makeMusicList[0].desktopFirst.map((item, index) => {
						return (
							<div className='min-h-[70vh]' key={index}>
								<section className='text-end p-4'>
									<div className='w-[30rem] mx-auto'>
										<MusicDetails title={item.title} content={item.content} />
									</div>
								</section>
							</div>
						);
					})}
				</div>

				<div className='h-[75vh] mx-auto py-10 text-center relative'>
					{makeMusicList[0].desktopFirst.map((item, index) => {
						return (
							<Fragment key={index}>
								<ArrowDown num={item.countNum} />
							</Fragment>
						);
					})}
				</div>

				<div className='justify-self-start'>
					{makeMusicList[0].desktopSecond.map((item, index) => {
						return (
							<div className='min-h-[70vh]' key={index}>
								<section className='p-4'>
									<div className='w-[30rem] mx-auto'>
										<MusicDetails title={item.title} content={item.content} />
									</div>
								</section>
							</div>
						);
					})}
				</div>
			</section>

			{/* mobile view */}
			<section className='block lg:hidden musicGroup1 px-4 py-20 bg-grad'>
				<div className='text-center [&>*]:mb-4'>
					<Info
						btnName='you'
						title='Focus on making music'
						desc='You can focus on your music production with peace of mind: the
						Artist Toolkit has lots of information about music production,
						knowledge about vinyl records and cassettes, and tips on how to sell
						your music. Artist Toolkit'
					/>
				</div>

				{makeMusicList[0].firstGroup.map((item, index) => {
					return (
						<div className='mb-[5rem] flex gap-3' key={index}>
							<div className='relative'>
								<ArrowDown num={item.countNum} />
							</div>
							<MusicDetails title={item.title} content={item.content} />
						</div>
					);
				})}

				<div className='homeArtist py-10 px-5 border-2 border-black'>
					<div className='text-center [&>*]:mb-4'>
						<Info
							btnName='qrates'
							title="We'll take care of the hassle"
							desc='Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.'
						/>
					</div>

					{makeMusicList[0].secondGroup.map((item, index) => {
						return (
							<div className='mb-[5rem] flex gap-3' key={index}>
								<div className='relative'>
									<ArrowDown num={item.countNum} />
								</div>
								<MusicDetails title={item.title} content={item.content} />
							</div>
						);
					})}
				</div>

				<div className='my-10 text-center [&>*]:mb-4'>
					<Info
						btnName='you'
						title='Receive revenue'
						desc='Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account.'
					/>

					<img
						src={imgSrc.src}
						alt='Music Image'
						className='block w-96 h-52 mx-auto object-cover'
					/>
				</div>
			</section>

			<section className='bg-black px-16 py-20 flex flex-col lg:flex-row lg:justify-between items-center'>
				<h1 className='mb-4 lg:mb-0 text-white text-[2.5rem] leading-[2.625rem] font-bold'>
					Start a new project
				</h1>
				<button className='w-full lg:w-52 btn btn-outline text-white text-base leading-[2.875rem] font-bold uppercase rounded-full'>
					make your own
				</button>
			</section>
		</>
	);
}
