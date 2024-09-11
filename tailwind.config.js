const config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'pale-gold': {
					50: '#fbf6f5',
					100: '#f8eae8',
					200: '#f2d9d6',
					300: '#e8beb9',
					400: '#d48a82',
					500: '#c8746b',
					600: '#b25a50',
					700: '#954840',
					800: '#7c3f38',
					900: '#683934',
					950: '#371b18',
				},
			},
			screens: {
				'3xl': '1600px',
			},
		},
	},
	plugins: [],
};
export default config;
