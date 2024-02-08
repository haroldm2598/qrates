import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtistInitialState } from '@/lib/types/definitions';

import musicImg from '@/app/assets/images/forartist/qratesalbum.avif';
import musicImg1 from '@/app/assets/images/forartist/qratesalbum2.avif';
import musicImg2 from '@/app/assets/images/forartist/qratesalbum3.avif';
import musicImg3 from '@/app/assets/images/forartist/qratesalbum4.avif';
import musicImg5 from '@/app/assets/images/forartist/qratesalbum5.avif';
import musicImg6 from '@/app/assets/images/forartist/qratesalbum6.avif';

import TestimonalImg from '@/app/assets/images/forartist/artistonqrates.avif';
import TestimonalImg2 from '@/app/assets/images/forartist/artistonqrates2.avif';

const initialState: ArtistInitialState = {
	currentState: 1,
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
							imgSrc: musicImg5
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
			],
			desktopFirst: [
				{
					countNum: 1,
					title: 'Express your work on Qrates',
					content: [
						{
							subTitle: 'Qrates studio',
							desc: 'Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.'
						}
					]
				},
				{
					countNum: 2,
					title: 'Start a Qrates page,',
					content: [
						{
							subTitle:
								'confirm and pay for production costs. Pay up front? Crowdfunding?',
							desc: 'Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans.'
						},
						{
							subTitle: 'Qrates page and Artist page',
							desc: 'The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.',
							imgSrc: musicImg1
						}
					]
				},
				{
					countNum: 3,
					title: 'Collect orders from fans',
					content: [
						{
							desc: 'Share your Qrates page and collect orders from your fans. A variety of tools are also available to promote your music.'
						}
					]
				},

				{
					countNum: 4,
					title: 'Upload your product assets and start production',
					content: [
						{
							desc: 'Prepare your audio and print files required for production.'
						}
					]
				},

				{
					countNum: 5,
					content: [
						{
							imgSrc: musicImg3
						}
					]
				},
				{
					countNum: 6,
					title: '',
					content: [
						{
							subTitle: ''
						}
					]
				},

				{
					title: 'Receive revenue',
					content: [
						{
							desc: 'Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account.',
							imgSrc: musicImg6
						}
					]
				}
			],
			desktopSecond: [
				{
					title: 'Over 120,000 customization possibilities 3D Visualizer',
					content: [
						{
							desc: 'Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio.',
							imgSrc: musicImg
						}
					]
				},

				{
					title: "We support a wide range of artists' needs",
					content: [
						{
							subTitle: 'Small production minimums',
							desc: 'Vinyl records can be made from 100 copies, and cassette tapes from 50 copies.'
						},
						{
							subTitle: 'Select the payment option',
							desc: "You can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste."
						},
						{
							subTitle: 'Easily customizable your Qrates page and artist page',
							desc: 'Qrates provides easy-to-setup templates for the Qrates page and the artist profile page. The Qrates page for selling your music can be set up to include audio samples, embedded videos, and comments from fans, making it a great promotional tool.'
						}
					]
				},

				{
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
					title: 'Warehousing and Distribution',
					content: [
						{
							subTitle: 'Free warehousing',
							desc: 'When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan).'
						},
						{
							subTitle: 'Shipping',
							desc: 'When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.',
							imgSrc: musicImg5
						}
					]
				},

				{
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
	],
	TestimonalList: [
		{
			backgroundColor: 'homeArtist',
			imageSrc: TestimonalImg,
			desc: "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.",
			authorName: '—SOL',
			buttonName: 'artist on qrates',
			countNum: 1
		},
		{
			backgroundColor: 'testimonalBg',
			imageSrc: TestimonalImg2,
			desc: "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
			authorName: '—Mason Lieberman (The Real Folk Blues, 2020)',
			buttonName: 'artist on qrates',
			countNum: 2
		}
	]
};

export const data = createSlice({
	name: 'forartist',
	initialState,
	reducers: {
		handleCurrentState: (state, action: PayloadAction<number>) => {
			state.currentState = action.payload;
		}
	}
});

export const { handleCurrentState } = data.actions;
export default data.reducer;
