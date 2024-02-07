import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface NavLinks {
	name: string;
	path: string;
}

export interface FooterLinks {
	title: string;
	itemLink: Array<string>;
}
// ==== homeSlice ====
export interface InitialState {
	value: HomeState;
	socialIcons: Array<icons>;
	navLinks: Array<NavLinks>;
	footerLinks: Array<FooterLinks>;
	Icons: Array<IconProps>;
	linkFans: Array<links>;
	linkArtist: Array<links>;
	gridImg: Array<gridImgProps>;
	policies: Array<string>;
}

export interface HomeState {
	id: string;
	name: string;
	isClick: boolean;
}

export interface IconProps {
	desktop: icons[];
	mobile: icons[];
}

export interface icons {
	Icon: IconType;
}

export interface links {
	name: string;
	path: string;
	bgImg: string;
}

export interface gridImgProps {
	imgSrc: StaticImageData;
}
// ==== forArtistSlice ====
export interface ArtistInitialState {
	value: { id: string; name: string; isClick: boolean };
	makeMusicList: Array<MusicGroup>;
}

interface MusicGroup {
	firstGroup: Array<MakeMusicProps>;
	secondGroup: Array<MakeMusicProps>;
}

interface MakeMusicProps {
	countNum: number;
	title: string;
	content: Array<MusicDetailProps>;
}

export interface MusicDetailProps {
	subTitle: string;
	desc: string;
	imgSrc?: StaticImageData;
}

export interface gridCardProps {
	title: string;
	description: string;
	imageSource: StaticImageData;
}
