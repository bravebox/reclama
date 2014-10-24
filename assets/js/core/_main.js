define(
[
	'jquery',
	'waypoints',
	'Handlebars',
	'lazyload',
	'be',
	'cycle2_lib',
	'cycle2_carousel',
	'cycle2_fade',
	'fitVids'
], 

function($, waypoints, Handlebars, lazyload, be, Cycle2_lib, Cycle2_carousel, Cycle2_fade) {
	'use strict';


	/* Parallax scroll
	------------------------------ */

        var $window = $(window);
        $('[data-type="background"]').each(function() {
            var $bgobj = $(this);
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                    $bgobj.css({ backgroundPosition: coords });
            });
        });	


	/* Elements
	------------------------------ */
		var mobile = (/iphone|ipad|Android|webOS|iPod|BlackBerry|Windows Phone|ZuneWP7/gi).test(navigator.appVersion);
		var win_h = $(window).height();
		
		var el = {
			body: 'body',
			offset: '50%' // waypoint offset
		};

	/* Resize
	------------------------------ */
		
		$(window).resize(function() {
			resizeFs();
		});
		
		var resizeFs = function() {
			win_h = $(window).height();
			$('.fs').css({height: win_h});
			return false;
		};


	/* window load
	------------------------------ */

		$(window).load(function() {

			/* Preload
			------------------------------ */
				$('#loader').delay(350).fadeOut('slow', function() {
					$('body').removeClass('no-scroll');
				});

			/* Init 
			------------------------------ */
				resizeFs();

		});



	/* Main navigation toggle
	------------------------------ */
		$(function() {
			$(document).on("click touchstart", "#nav-toggle", function(){
				$(this).toggleClass('active');	
				$('.pull').slideToggle();
			});
		});	
		


	/* Scroll to links
	------------------------------ */
		$(function() {
			$('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 2000);
						return false;
					}
				}
			});
		});	



	/* Waypoints
	------------------------------ */
		$(function() {
			if(!mobile) {
				$('#reclama').waypoint(function() {
					$(this).find('.animated').addClass('fadeInUp');
				}, {
					offset: el.offset
				});
							
				$('#heb_je_idee').waypoint(function() {
					$(this).find('.animated').addClass('fadeInUp');
				}, {
					offset: el.offset
				});
				
				$('#people').waypoint(function() {
					$(this).find('.animated').addClass('fadeInUp');
				}, {
					offset: el.offset
				});
				
				$('#subscribe').waypoint(function() {
					$(this).find('.animated').addClass('fadeInUp');
				}, {
					offset: el.offset
				});
				
				$('#contact').waypoint(function() {
					$(this).find('.animated').addClass('fadeInUp');
				}, {
					offset: el.offset
				});
			} else {
				$(document).find('.animated').addClass('fadeInUp');						
			}
		});



	/* Member card
	------------------------------ */
		$(function() {
			$(document).on('click', 'a.wp-member-detail', function(e) {
				e.preventDefault();
				// body stuff
					$('#loader').fadeIn('fast');
					$('body').addClass('no-scroll');
				// user
					var user_index = $(this).parent().index();
					var user_be	= reclama[user_index]['behance_user'] || false;

					if(user_be) {
						loadBeProjectsByUser(user_be, user_index);
					} else {
						var context = {
							"member": reclama[user_index]
						};	
						loadHbTemplate(context);
					}
			});
		
			$(document).on('click', 'a.member-close', function(e) {
				e.preventDefault();
					$("#reclama-member-overlay").fadeOut(600, function(){
						$('html, body').removeClass('no-scroll');			
						$('.cycle-slider').cycle('destroy');
						$(this).remove();
					});
			});
		});


	/* Behance
	------------------------------ */
		
		var loadHbTemplate = function(d) {
			var source, template;
			$.ajax({
                url: 'assets/templates/member.html',
                cache: true,
                success: function (data) {
                    source 		= data;
                    template	= Handlebars.compile(source);
                    $('body').append(template(d));
                    $("#reclama-member-overlay").animate({opacity: 1}, 600);
					$('#loader').delay(350).fadeOut('slow', function() {
						$(".cycle-slider").cycle();
						$(".fit").fitVids();
					});
                }
            });			
		}

		var loadBeProjectsByUser = function(user, index) {
			be('3pU0bKlKFzMTwDXxMu8LYZMOEfBINPbG')
				.user.projects(user)
				.then(function success(results) {
					var context = {
						"be": true,
						"projects": results.projects,
						"member": reclama[index]
					};	
					loadHbTemplate(context);
				}, 
				function failure(error) {
					console.error(error);
				});
		}



});