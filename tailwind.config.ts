import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/lib/esm/**/*.js'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'forfans1': "url('../images/home/subheroImage.avif')",
				'forfans2': "url('../images/home/records.jpg')",
				'forfans3': "url('../images/home/cassete.jpg')",
				'forfans4': "url('../images/home/stories.jpg')",
				'forartist': "url('../images/home/artistImage.avif')"
			},
			colors: {
				'color-yellow': '#fff804',
				'color-grey': '#e4e5de'
			}
		}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')]
};
export default config;
