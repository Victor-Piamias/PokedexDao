const plugin = require("tailwindcss/plugin")

module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			plugins: [
				plugin(({ addVariant }) => {
					addVariant("ahover", "@media (hover: hover) { &:hover }")
				}),
			],
		},
	},
}
