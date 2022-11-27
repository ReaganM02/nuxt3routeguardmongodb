// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	nitro: {
		plugins: ["~/server/db/index.js"],
	},
	runtimeConfig: {
		MONGO_URL: process.env.MONGO_URL,
		JWT_SECRET: process.env.JWT_SECRET,
		JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
	},
	modules: [
		['@pinia/nuxt', {
			autoImports: ['defineStore', 'acceptHMRUpdate']
		},], 'nuxt-icon'
	],
	imports: {
		dirs: ['stores']
	},
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
})
