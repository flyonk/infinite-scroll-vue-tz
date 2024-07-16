module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: ['plugin:vue/vue3-recommended', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	parserOptions: {
		ecmaVersion: 2020,
	},
};
