import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/lib/types/definitions';
import {
	FaMagnifyingGlass,
	FaCartShopping,
	FaFacebook,
	FaSquareInstagram,
	FaSquareTwitter
} from 'react-icons/fa6';

import gridImg1 from '@/app/assets/images/home/grid1.avif';
import gridImg2 from '@/app/assets/images/home/grid2.avif';
import gridImg3 from '@/app/assets/images/home/grid3.avif';
import gridImg4 from '@/app/assets/images/home/grid4.avif';
import gridImg5 from '@/app/assets/images/home/grid5.avif';
import gridImg6 from '@/app/assets/images/home/grid6.avif';
import gridImg7 from '@/app/assets/images/home/grid7.avif';
import gridImg8 from '@/app/assets/images/home/grid8.avif';

import carouselImg1 from '@/app/assets/images/home/sample_4dilla-d886be83.png';
import carouselImg2 from '@/app/assets/images/home/sample_all_india-36327a32.png';
import carouselImg3 from '@/app/assets/images/home/sample_black_country_disco-233bbc85.png';
import carouselImg4 from '@/app/assets/images/home/sample_blarney-469831b2.png';
import carouselImg5 from '@/app/assets/images/home/sample_bombay-668a0fa8.png';
import carouselImg6 from '@/app/assets/images/home/sample_female-a4d2352d.png';

import fansImg1 from '@/app/assets/images/home/sample_black_country_disco-233bbc85.png';
import fansImg2 from '@/app/assets/images/home/sample_blarney-469831b2.png';
import fansImg3 from '@/app/assets/images/home/sample_bombay-668a0fa8.png';
import fansImg4 from '@/app/assets/images/home/sample_female-a4d2352d.png';

const initialState: InitialState = {
	value: {
		id: '',
		name: '',
		isClick: false
	},
	Icons: [
		{
			desktop: [{ Icon: FaMagnifyingGlass }, { Icon: FaCartShopping }],
			mobile: [
				{ Icon: FaFacebook },
				{ Icon: FaSquareInstagram },
				{ Icon: FaSquareTwitter }
			]
		}
	],
	socialIcons: [
		{ Icon: FaFacebook },
		{ Icon: FaSquareInstagram },
		{ Icon: FaSquareTwitter }
	],
	navLinks: [
		{ name: 'discover music', path: '/' },
		{ name: 'for artists', path: '/forartists' },
		{ name: 'for fans', path: '/forfans' }
	],
	footerLinks: [
		{
			title: 'for artists',
			itemLink: [
				'For Artists',
				'How it Works',
				'Artist Toolkit',
				'Referral Program'
			]
		},
		{
			title: 'for fans',
			itemLink: [
				'For Fans',
				'Records',
				'Cassettes',
				'Stories',
				'Qrates Curated'
			]
		},
		{
			title: 'our company',
			itemLink: ['About Qrates', 'Careers', 'Partners']
		},
		{
			title: 'help',
			itemLink: ['Support Center', 'Contact Us', 'Returns', 'Shipping']
		}
	],
	linkFans: [
		{ name: 'Records', path: '/', bgImg: 'bg-forfans1' },
		{ name: 'Cassettes', path: '/', bgImg: 'bg-forfans2' },
		{ name: 'Stories', path: '/', bgImg: 'bg-forfans3' },
		{ name: 'Qrates Curated', path: '/', bgImg: 'bg-forfans4' }
	],
	linkArtist: [
		{ name: 'Vinyl Knowledge', path: '/', bgImg: 'bg-slate-50' },
		{ name: 'Distribution & Promotion', path: '/', bgImg: 'bg-slate-100' },
		{ name: 'Mixing & Mastering', path: '/', bgImg: 'bg-slate-200' },
		{ name: 'Inspiration', path: '/', bgImg: 'bg-slate-300' },
		{ name: 'Qrates Tips', path: '/', bgImg: 'bg-slate-400' }
	],
	gridImg: [
		{ imgSrc: gridImg1 },
		{ imgSrc: gridImg2 },
		{ imgSrc: gridImg3 },
		{ imgSrc: gridImg4 },
		{ imgSrc: gridImg5 },
		{ imgSrc: gridImg6 },
		{ imgSrc: gridImg7 },
		{ imgSrc: gridImg8 }
	],
	policies: ['Terms of service', 'Privacy Policy', 'Legal Information'],
	qratesCarousel: [
		{ imgSrc: carouselImg1 },
		{ imgSrc: carouselImg2 },
		{ imgSrc: carouselImg3 },
		{ imgSrc: carouselImg4 },
		{ imgSrc: carouselImg5 },
		{ imgSrc: carouselImg6 }
	]
};

export const data = createSlice({
	name: 'home',
	initialState,
	reducers: {
		test: (state, action: PayloadAction<boolean>) => {
			state.value.isClick = action.payload;
		}
	}
});

export const { test } = data.actions;
export default data.reducer;
