module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
		"plugin:@typescript-eslint/recommended"
	],
	plugins: ["@typescript-eslint"],
	rules: {
		"react/prop-types": 0,
		"@typescript-eslint/interface-name-prefix": [2, "always"],
		"@typescript-eslint/no-explicit-any": 2,
		indent: "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-use-before-define": "off"
	},
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	settings: {
		react: {
			version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
