Hoe werkt de build file:

1) check build.js voor instellingen (in dit geval wordt require.js meegerenderd als module) en is optimize: none for debug:

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

2) navigeer naar build folder
cd /build

3) voer command in (voor elke render)
java -classpath js.jar org.mozilla.javascript.tools.shell.Main r.js -o build.js

4) check output in dit geval: /wp-content/themes/base/assets/js/main.min.js