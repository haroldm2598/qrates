'use client';
import Link from 'next/link';
import { links } from '@/app/ui/types/definitions';
import { useState } from 'react';

interface DataProps {
	data: Array<links>;
	customBg: string;
	btnName: string;
	cta: string;
}

export default function BgChange({ data, customBg, btnName, cta }: DataProps) {
	const [isChange, setIsChange] = useState('');

	const handleChangeBg = (dataIndex: number) => {
		return data?.find((item, index) => {
			if (index === dataIndex) {
				setIsChange(item.bgImg);
			}
		});
	};

	return (
		<div
			className={`${
				isChange.length > 0 ? isChange : customBg
			} bg-cover bg-center max-w-full h-[70vh] lg:h-[90vh] p-4 lg:p-8 flex flex-col justify-between items-start`}
		>
			<button className='btn btn-outline text-sm font-bold text-white uppercase rounded-none'>
				{btnName}
			</button>

			<ul>
				{data?.map((link, index) => {
					return (
						<li
							key={index}
							onMouseEnter={() => handleChangeBg(index)}
							onMouseLeave={() => setIsChange('')}
						>
							<Link href={link.path}>
								<span className='text-white text-4xl lg:text-6xl lg:leading-[4.25rem] font-bold hover:underline'>
									{link.name}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>

			<h1 className=' text-white text-xl leading-7'>{cta}</h1>
		</div>
	);
}
