require.config({

	paths: {
		// libs
			jquery: 'lib/jquery/jquery',
			bridget: 'lib/jquery/jquery.bridget',

			modernizr: 'lib/modernizr',
			bootstrap: 'lib/bootstrap',
			be: 'lib/behance/be',

		// animations / load
			waypoints: 'lib/jquery-animations/jquery.waypoints',
			lazyload: 'lib/jquery-animations/jquery.lazyload.min',
			fitVids: 'lib/jquery-animations/jquery.fitvids',
			//velocity: 'lib/jquery-animations/jquery.velocity',

		// handlebars
	        Handlebars: 'lib/handlebars',
	        text: 'lib/tools/text',
	        json: 'lib/tools/json',
	        hbars: 'lib/hbars',
	        templates: '../templates',
	        //data: '../data',

		// cycle2			
			cycle2_lib: 'lib/jquery.cycle2/jquery.cycle2.min',
			cycle2_carousel: 'lib/jquery.cycle2/jquery.cycle2.carousel.min',
			cycle2_fade: 'lib/jquery.cycle2/jquery.cycle2.ie-fade.min',

		// core libs
			main: 'core/_main'
	},

	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		waypoints: {
			deps: ['jquery']
		},
		lazyload: {
			deps: ['jquery']
		},
		cycle2_lib: {
			deps: ['jquery']
		},
        Handlebars: {
            exports: 'Handlebars'
        }
	}

});

require(['core/_main']);

define(['modernizr'], [], window.Modernizr);