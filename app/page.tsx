import { inria_sans } from '@/app/ui/font';

import Hero from '@/app/ui/Hero';
import Forfans from '@/app/ui/Forfans';
import Forartist from '@/app/ui/Forartist';
import Artisttoolkit from '@/app/ui/Artisttoolkit';
import QratesStudio from '@/app/ui/QratesStudio';
import GridImage from './ui/GridImage';

export default function page() {
	return (
		<section className={inria_sans.className}>
			<Hero />
			<Forfans />
			<Forartist />
			<Artisttoolkit />
			<QratesStudio />
			<GridImage />
		</section>
	);
}
