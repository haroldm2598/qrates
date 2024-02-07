import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '@/lib/types/definitions';

import gridImg1 from '@/app/assets/images/home/grid1.avif';
import gridImg2 from '@/app/assets/images/home/grid2.avif';
import gridImg3 from '@/app/assets/images/home/grid3.avif';
import gridImg4 from '@/app/assets/images/home/grid4.avif';
import gridImg5 from '@/app/assets/images/home/grid5.avif';
import gridImg6 from '@/app/assets/images/home/grid6.avif';
import gridImg7 from '@/app/assets/images/home/grid7.avif';
import gridImg8 from '@/app/assets/images/home/grid8.avif';

import {
	FaMagnifyingGlass,
	FaCartShopping,
	FaFacebook,
	FaSquareInstagram,
	FaSquareTwitter
} from 'react-icons/fa6';

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
		{ name: 'Records', path: '/', bgImg: 'bg-slate-200' },
		{ name: 'Cassettes', path: '/', bgImg: 'bg-slate-300' },
		{ name: 'Stories', path: '/', bgImg: 'bg-slate-400' },
		{ name: 'Qrates Curated', path: '/', bgImg: 'bg-slate-500' }
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
	policies: ['Terms of service', 'Privacy Policy', 'Legal Information']
};

export const data = createSlice({
	name: 'home',
	initialState,
	reducers: {
		test: (state, action) => {
			state.value.isClick = action.payload;
		}
	}
});

export const { test } = data.actions;
export default data.reducer;
