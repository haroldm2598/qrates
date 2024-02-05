import { IconType } from 'react-icons';

export interface icons {
	Icon: IconType;
}

export interface test {
	desktop: icons[];
	mobile: icons[];
}

export interface links {
	name: string;
	path: string;
	bgImg: string;
}
