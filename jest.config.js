module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"setupFilesAfterEnv": [
		"<rootDir>/src/setupTests.ts"
	],
	"collectCoverageFrom": [
		"src/**/*.{ts,tsx}",
		"!src/**/*.d.ts"
	],
	"testMatch": [
		"<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
		"<rootDir>/src/**/*.{spec,test}.{ts,tsx}"
	],
	"testEnvironment": "jsdom",
	"transform": {
		"^.+\\.(ts|tsx)$": "<rootDir>/node_modules/babel-jest"
	},
	"transformIgnorePatterns": [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$"
	],
	"moduleNameMapper": {
		'\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
		"@src/(.*)": [
			"<rootDir>/src/$1"
		]
	},
	"watchPlugins": [
		"jest-watch-typeahead/filename",
		"jest-watch-typeahead/testname"
	],
	"resetMocks": true
}
