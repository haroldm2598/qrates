import { FaArrowDown } from 'react-icons/fa';

export default function ArrowDown({ num }: { num?: number | undefined }) {
	return (
		<>
			{num && (
				<>
					<div
						className={`w-10 h-10 relative bg-white border-2 border-black rounded-full`}
					>
						<span className='absolute left-[50%] translate-x-[-50%] text-[1.75rem] leading-[2.375rem] font-bold '>
							{num}
						</span>
					</div>

					<div className='h-[100%] w-[2px] bg-black relative left-[50%] translate-x-[-50%]'></div>

					<div>
						<FaArrowDown className='text-black absolute left-[50%] translate-x-[-50%]' />
					</div>
				</>
			)}
		</>
	);
}
