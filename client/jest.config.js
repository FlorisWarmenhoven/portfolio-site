module.exports = {
	roots: ["<rootDir>/tests"],
	transform: {
		".*.tsx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"identity-obj-proxy",
	},
};
