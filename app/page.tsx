import { inria_sans } from '@/app/ui/font';

import Hero from '@/app/ui/Hero';
import Forfans from '@/app/ui/Forfans';
import Forartist from '@/app/ui/Forartist';

export default function page() {
	return (
		<section className={inria_sans.className}>
			<Hero />
			<Forfans />
			<Forartist />
		</section>
	);
}
