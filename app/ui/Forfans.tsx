import BgChange from '../components/BgChange';

export default function Forfans() {
	const linkFans = [
		{ name: 'Records', path: '/', bgImg: 'bg-slate-200' },
		{ name: 'Cassettes', path: '/', bgImg: 'bg-slate-300' },
		{ name: 'Stories', path: '/', bgImg: 'bg-slate-400' },
		{ name: 'Qrates Curated', path: '/', bgImg: 'bg-slate-500' }
	];

	return (
		<>
			<BgChange
				customBg='bg-forfans'
				data={linkFans}
				btnName='for fans'
				cta='The latest from the Qrates community'
			/>
		</>
	);
}
