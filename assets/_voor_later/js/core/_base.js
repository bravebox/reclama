define(
[
	// lib
		'jquery',
		'modernizr',
		'bootstrap',
	// core
		'general',
		'resize',
		'social',
		'detect',
		'cycle2',
		'cases',
		'case'
], 

function($, Modernizr, Bootstrap) {
	'use strict';

	var initialize = function() {
		console.log('init!');
	};
	
	return {
		initialize: initialize
	};	

});