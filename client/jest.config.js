module.exports = {
	roots: ["<rootDir>/src/tests"],
	transform: {
		".*.tsx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
