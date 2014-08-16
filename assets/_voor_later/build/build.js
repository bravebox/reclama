({
	baseUrl: '../js',
	mainConfigFile: '../js/main.js',
	name: '../js/main',
	out: '../js/main.min.js',
	preserveLicenseComments: false,
	optimize: 'none',
	paths: {
		requireLib: 'lib/require'
	},
	include: 'requireLib'
})