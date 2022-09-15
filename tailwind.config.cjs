/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {

    extend: {
			backgroundImage: {
				'fotoCabecalho': "url('./src/img/header.png')"
			},
			fontFamily: {
				'italiana': ['Italiana', 'serif']

			},
			colors:{
				'dark': '#242536',
				'dark-grey': '#92929d',
				'grey': '#e4e4e4',
				'black': '#4c4d5e',
				'light-grey': '#f6f6f6',
				'red': '#d73b3b',
			},
		},
  },
  plugins: [],
}
