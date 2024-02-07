import { StaticImageData } from 'next/image';

interface MusicDetailProps {
	title: string;
	content: Array<ContentProps>;
}

interface ContentProps {
	subTitle: string;
	desc: string;
	imgSrc?: StaticImageData | undefined;
}

export default function MusicDetails({ title, content }: MusicDetailProps) {
	return (
		<div className='text-black'>
			<h1 className='text-[1.375rem] font-bold'>{title}</h1>
			{content?.map((item, index) => {
				return (
					<div key={index} className='mt-2 [&>*]:mb-2'>
						<h2 className='text-lg leading-6 font-bold'>{item.subTitle}</h2>
						<p className='text-lg leading-6'>{item.desc}</p>
						{item.imgSrc && (
							<img
								src={item.imgSrc.src}
								alt='music group image'
								className='last:mb-0 block w-96 h-52 object-cover mx-auto'
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
