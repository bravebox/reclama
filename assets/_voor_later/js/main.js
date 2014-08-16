require.config({
	paths: {
		// core
			'base': 'core/_base', // module loader

		// libs
			'jquery': 'lib/jquery',
			'modernizr': 'lib/modernizr',
			'bootstrap': 'lib/bootstrap',

		// cycle2			
			'cycle2_lib': 'lib/jquery.cycle2.min',
			'cycle2_carousel': 'lib/jquery.cycle2.carousel.min',
			'cycle2_fade': 'lib/jquery.cycle2.ie-fade.min'			
	},

	shim: {
		'modernizr': {
			exports: 'modernizr'
		}
    }	

});

require(['core/_base']);