import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

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

export interface NavLinks {
	name: string;
	path: string;
}

export interface FooterLinks {
	title: string;
	itemLink: Array<string>;
}

export interface links {
	name: string;
	path: string;
	bgImg: string;
}

export interface gridImgProps {
	imgSrc: StaticImageData;
}
