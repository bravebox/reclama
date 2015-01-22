({
	baseUrl: '../js/',
	mainConfigFile: '../js/app.js',
	name: '../js/app',
	out: '../js/app.min.js',
	preserveLicenseComments: false,
	//optimize: 'none',
	paths: {
		requireLib: 'lib/require'
	},
	include: 'requireLib'
})