import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtistInitialState } from '@/lib/types/definitions';

import musicImg from '@/app/assets/images/forartist/qratesalbum.avif';
import musicImg2 from '@/app/assets/images/forartist/qratesalbum3.avif';
import musicImg3 from '@/app/assets/images/forartist/qratesalbum5.avif';

const initialState: ArtistInitialState = {
	value: {
		id: '',
		name: '',
		isClick: false
	},
	makeMusicList: [
		{
			firstGroup: [
				{
					countNum: 1,
					title: 'Express your work on Qrates',
					content: [
						{
							subTitle: 'Qrates studio',
							desc: 'Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.',
							imgSrc: musicImg
						}
					]
				},
				{
					countNum: 2,
					title: 'Start a Qrates page, confirm and pay for production costs.',
					content: [
						{
							subTitle: 'Pay up front? Crowdfunding?',
							desc: 'Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans.'
						},
						{
							subTitle: 'Qrates page and Artist page',
							desc: 'The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.'
						}
					]
				}
			],
			secondGroup: [
				{
					countNum: 3,
					title: 'Wholesale distribution network',
					content: [
						{
							subTitle:
								'You can sell wholesale directly to record stores worldwide',
							desc: 'Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with.',
							imgSrc: musicImg2
						}
					]
				},
				{
					countNum: 4,
					title: 'Professional audio mastering and artwork support.',
					content: [
						{
							subTitle: 'Audio mastering service',
							desc: 'Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation.'
						},
						{
							subTitle: 'Artwork support',
							desc: 'We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible.'
						}
					]
				},
				{
					countNum: 5,
					title: 'Pressing records and making cassette tapes',
					content: [
						{
							subTitle: 'Trusted production partners',
							desc: 'We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products.'
						},
						{
							subTitle: 'Speedy delivery time',
							desc: 'Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less.'
						}
					]
				},
				{
					countNum: 6,
					title: 'Warehousing and Distribution',
					content: [
						{
							subTitle: 'Free warehousing',
							desc: 'When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan).'
						},
						{
							subTitle: 'Shipping',
							desc: 'When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.',
							imgSrc: musicImg3
						}
					]
				},
				{
					countNum: 7,
					title: 'Continue selling on Qrates',
					content: [
						{
							subTitle: 'Selling on Qrates',
							desc: 'By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates.'
						},
						{
							subTitle: 'Repress',
							desc: 'Repressing records is always easy. Master stampers can be stored at the factory for 18 months at no charge, so there is no need to make new stampers within that time frame. Use the repress requests from fans as a signal on when to repress more records.'
						}
					]
				}
			]
		}
	]
};

export const data = createSlice({
	name: 'forartist',
	initialState,
	reducers: {
		test: (state, action) => {
			state.value.isClick = action.payload;
		}
	}
});

export const { test } = data.actions;
export default data.reducer;
