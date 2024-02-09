import GridImage from '../ui/GridImage';
import Community from '../ui/forartists/Community';
import Testimonal from '../ui/forartists/Testimonal';
import Connect from '../ui/forfans/Connect';
import Features from '../ui/forfans/Features';
import Hero from '../ui/forfans/Hero';

export default function page() {
	return (
		<section>
			<Hero />
			<Connect />
			<Features />
			<Community />
			<Testimonal />
			<GridImage />
		</section>
	);
}
