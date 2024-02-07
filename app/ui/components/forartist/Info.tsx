interface InfoProps {
	btnName: string;
	title: string;
	desc: string;
}

export default function Info({ btnName, title, desc }: InfoProps) {
	return (
		<>
			<button className='btn btn-outline bg-white text-black uppercase rounded-none'>
				{btnName}
			</button>

			<h1 className='text-black text-4xl font-bold'>{title}</h1>
			<p className=' text-black text-lg leading-6'>{desc}</p>
		</>
	);
}
