/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {colors: {
		'minsk': {
			'50': '#eef4ff',
			'100': '#e0eaff',
			'200': '#c7d8fe',
			'300': '#a4bdfd',
			'400': '#8097f9',
			'500': '#6274f2',
			'600': '#454ce6',
			'700': '#373bcb',
			'800': '#2f34a4',
			'900': '#31378c',
			'950': '#1b1d4b',
	},
		},},
	},
	plugins: [],
}
