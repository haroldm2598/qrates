'use client';
import { AppDispatch, useAppSelector } from '@/lib/redux/store';
import { useDispatch } from 'react-redux';
import { handleCurrentState } from '@/lib/redux/features/artists/artistSlice';

import TestimonalInfo from '../components/forartist/TestimonalInfo';
import TestimonalImage from '../components/forartist/TestimonalImage';
import { AnimatePresence, motion } from 'framer-motion';

export default function Testimonal() {
	const { TestimonalList, currentState } = useAppSelector(
		(state) => state.artistTemplate
	);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			{TestimonalList.map((item) => {
				if (item.countNum === currentState) {
					return (
						<AnimatePresence key={item.countNum}>
							<motion.section
								className={`${item.backgroundColor} p-10 lg:min-h-screen border-y-2 border-black`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.4, type: 'tween', stiffness: 120 }}
							>
								<div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
									<div className='order-2 lg:order-1 flex-1 flex flex-col justify-between gap-5 lg:gap-0'>
										<TestimonalInfo
											buttonName={item.buttonName}
											desc={item.desc}
											authorName={item.authorName}
										/>

										<div className='[&>*]:mr-2'>
											{TestimonalList.map((button, index) => {
												return (
													<button
														key={index}
														className='w-12 h-12 btn btn-outline text-black rounded-full hover:bg-black hover:text-white active:bg-black focus:bg-black focus:text-white'
														onClick={() =>
															dispatch(handleCurrentState(button.countNum))
														}
													>
														{button.countNum}
													</button>
												);
											})}
										</div>
									</div>

									<div className='order-1 lg:order-2 flex-1 h-full w-full border-2 border-black'>
										<TestimonalImage ImageSource={item.imageSrc} />
									</div>
								</div>
							</motion.section>
						</AnimatePresence>
					);
				}
			})}
		</>
	);
}
