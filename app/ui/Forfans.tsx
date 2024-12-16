'use client';
import { useAppSelector } from '@/lib/redux/store';
import BgChange from './components/BgChange';

export default function Forfans() {
	const { linkFans } = useAppSelector((state) => state.homeTemplate);

	return (
		<>
			<BgChange
				// customBg='bg-forfans1'
				data={linkFans}
				btnName='for fans'
				cta='The latest from the Qrates community'
			/>
		</>
	);
}
