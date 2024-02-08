interface TestimonalInfoProps {
	buttonName: string;
	desc: string;
	authorName: string;
}

export default function TestimonalInfo({
	buttonName,
	desc,
	authorName
}: TestimonalInfoProps) {
	return (
		<>
			<button className='self-start btn btn-outline bg-white text-black uppercase rounded-none'>
				{buttonName}
			</button>

			<div className='[&>*]:mb-4'>
				<p className='w-full lg:w-[36rem] text-black text-[1.375rem] lg:text-[1.75rem] leading-6 lg:leading-[2.125rem]'>
					{`"${desc}"`}
				</p>
				<h1 className='text-black text-lg lg:text-xl leading-6 lg:leading-7 font-bold'>
					{authorName}
				</h1>
			</div>
		</>
	);
}
