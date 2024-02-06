import BgChange from '../components/BgChange';

export default function Artisttoolkit() {
	const linkFans = [
		{ name: 'Vinyl Knowledge', path: '/', bgImg: 'bg-slate-50' },
		{ name: 'Distribution & Promotion', path: '/', bgImg: 'bg-slate-100' },
		{ name: 'Mixing & Mastering', path: '/', bgImg: 'bg-slate-200' },
		{ name: 'Inspiration', path: '/', bgImg: 'bg-slate-300' },
		{ name: 'Qrates Tips', path: '/', bgImg: 'bg-slate-400' }
	];

	return (
		<>
			<BgChange
				customBg='bg-forartist'
				data={linkFans}
				btnName='for fans'
				cta='The latest from the Artist toolkit'
			/>
		</>
	);
}
