'use client';
import { useAppSelector } from '@/lib/redux/store';
import BgChange from '../components/BgChange';

export default function Artisttoolkit() {
	const { linkArtist } = useAppSelector((state) => state.homeTemplate);

	return (
		<>
			<BgChange
				customBg='bg-forartist'
				data={linkArtist}
				btnName='Artist Toolkit'
				cta='The latest from the Artist toolkit'
			/>
		</>
	);
}
