import ArtistResources from '../ui/forartists/ArtistResources';
import Community from '../ui/forartists/Community';
import Formats from '../ui/forartists/Formats';
import Hero from '../ui/forartists/Hero';
import MusicInfo from '../ui/forartists/MusicInfo';

export default function page() {
	return (
		<section>
			<Hero />
			<Formats />
			<MusicInfo />
			<ArtistResources />
			<Community />
		</section>
	);
}
