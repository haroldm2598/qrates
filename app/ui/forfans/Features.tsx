'use client';
import { useAppSelector } from '@/lib/redux/store';

export default function Features() {
	const { featureItems } = useAppSelector((state) => state.fansTemplate);

	return (
		<>
			{featureItems.map((item, index) => {
				return (
					<section
						key={index}
						className={`${item.backgroundColor} features1 p-5 lg:p-16 flex flex-col lg:flex-row border-y-2 border-black`}
					>
						<aside
							className={`${item.orderAside} order-2 max-w-2xl flex flex-col gap-5 lg:gap-10`}
						>
							<h1 className='px-2 py-[1px] self-start bg-white text-black text-sm leading-7 uppercase border-2 border-black'>
								{item.category}
							</h1>
							<div className='p-4 bg-white border-2 border-black'>
								<h1 className='mb-2 text-black text-[2.5rem] leading-[2.75rem] font-bold'>
									{item.title}
								</h1>
								<p className='text-black text-xl font-medium'>{item.desc}</p>
							</div>
						</aside>
						<main className={`${item.orderMain} order-1`}>
							<img src={item.imageSrc.src} alt='features image' />
						</main>
					</section>
				);
			})}
		</>
	);
}
