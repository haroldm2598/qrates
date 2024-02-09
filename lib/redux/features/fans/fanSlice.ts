import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FansInitialState } from '@/lib/types/definitions';

import featuresImageSrc1 from '@/app/assets/images/forfans/community.avif';
import featuresImageSrc2 from '@/app/assets/images/forfans/features.avif';
import featuresImageSrc3 from '@/app/assets/images/forfans/support.avif';

const initialState: FansInitialState = {
	value: 0,
	featureItems: [
		{
			backgroundColor: 'features1',
			category: 'community',
			title: 'Up to 85% of revenue is returned to the artist.',
			desc: "At Qrates, our priority is to create a vibrant music community where artists and fans can come together. We're committed to offering a high revenue return rate to artists and bridging the gap between them and their fans. Many talented artists have already shared their exclusive works with their fans all around the world through Qrates. We hope that Qrates will help even more artists and fans build relationships through the power of music.",
			imageSrc: featuresImageSrc1,
			orderAside: 'lg:order-1',
			orderMain: 'lg:order-2'
		},
		{
			backgroundColor: 'features2',
			category: 'features',
			title: 'Stay up to date on all of your past and future favorite releases',
			desc: "Use our 'Watch' feature to keep track of new releases by your favorite artists and participate in  'Crowdfunding' to support artists and bring their music to life, and send a 'Repress Request' to request artists to repress a project you have missed out on. If a project came with a digital download or bonus track, you can download the music at any time and enjoy it on your mobile device or other devices.",
			imageSrc: featuresImageSrc2,
			orderAside: 'lg:order-2',
			orderMain: 'lg:order-1'
		},
		{
			backgroundColor: 'features3',
			category: 'support',
			title:
				'Global shipping and customer support in specialized packing from 3 continents.',
			desc: 'All records and cassettes purchased from Qrates are carefully packed one by one in our affiliated warehouses in the U.S., U.K., and Japan in special packaging and shipped to our customers worldwide. Our customer support team is ready to handle inquiries regarding delivery status after purchase, as well as any problems that may arise.',
			imageSrc: featuresImageSrc3,
			orderAside: 'lg:order-1',
			orderMain: 'lg:order-2'
		}
	]
};

export const data = createSlice({
	name: 'fans',
	initialState,
	reducers: {
		test: (state, action: PayloadAction<number>) => {
			state.value != action.payload;
		}
	}
});

export const { test } = data.actions;
export default data.reducer;
