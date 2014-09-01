define(
[
	'jquery',
	'waypoints',
	'Handlebars',
	'be'
], 

function($, waypoints, Handlebars, be) {
	'use strict';

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
				
					// add preloader!!!
		
					var user_index = $(this).parent().parent().index();
					var user_be	= reclama[user_index]['behance_user'] || false;
					
					$('body').addClass('no-scroll');

					if(user_be) {
						loadBeProjectsByUser(user_be, user_index);
					}
					else
					{
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
                    // remove preloader!!!
                }
            });			
		}

		var loadBeProjectsByUser = function(user, index) {
			be('3pU0bKlKFzMTwDXxMu8LYZMOEfBINPbG')
				.user.projects(user)
				.then(function success(results) {
				
					var context = {
						"be": true,
						"be_data": results,
						"member": reclama[index]
					};	
					
					console.log(context);
					
					loadHbTemplate(context);
				}, 
				function failure(error) {
					console.error(error);
				});
		}



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

});