		var Handlebars, Modernizr, reclama,  console;
		var waypoint_offset = '50%';
		var window_height = $(window).height();

		/* ==========================================================================
		Document
		========================================================================== */

				$(document).ready(function() {
				
					
					$('#reclama').waypoint(function() {
						$(this).find('.animated').addClass('fadeInUp');
					}, {
						offset: waypoint_offset
					});
								
					$('#someBlock').waypoint(function() {
						$(this).find('.animated').addClass('fadeInUp');
					}, {
						offset: waypoint_offset
					});
					
					$('#people').waypoint(function() {
						$(this).find('.animated').addClass('fadeInUp');
					}, {
						offset: waypoint_offset
					});
					
					$('#news').waypoint(function() {
						$(this).find('.animated').addClass('fadeInUp');
					}, {
						offset: waypoint_offset
					});
					
					$('#contact').waypoint(function() {
						$(this).find('.animated').addClass('fadeInUp');
					}, {
						offset: waypoint_offset
					});
					
								
				});

		/* ==========================================================================
		Nav
		========================================================================== */
	
			document.querySelector("#nav-toggle").addEventListener("click", function() {
				this.classList.toggle("active");
			});

		/* ==========================================================================
		Functions
		========================================================================== */

			function resizeFs() {
				'use strict';
					window_height = $(window).height();
					$('.fs').css({height: window_height});
			}

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

		/* ==========================================================================
		Member card
		========================================================================== */

			$(function() {
				$(document).on('click', 'a.wp-member-detail', function(e) {
					e.preventDefault();
					e.stopPropagation();
						$('body').addClass('no-scroll');
						var index = $(this).parent().parent().index();
			            var path = 'assets/templates/member.html';
						var source, template;
			            $.ajax({
			                url: path,
			                cache: true,
			                success: function (data) {
			                    source = data;
			                    template = Handlebars.compile(source);
			                    $('body').append( template(reclama[index]) );
			                    $("#reclama-member-overlay").animate({opacity: 1}, 600);
			                }
			            });
				});
			});
			
			$(function() {
				$(document).on('click', 'a.member-close', function(e) {
					e.preventDefault();
					e.stopPropagation();
						$("#reclama-member-overlay").fadeOut(600, function(){
							$('html, body').removeClass('no-scroll');			
							$(this).remove();
						});
				});
			});
	
	
		/* ==========================================================================
		Overlay
		========================================================================== */
	
			$(document).ready(function() {
				// resize window
					resizeFs();
			
			    if (Modernizr.touch) {
			        // show the close overlay button
			        $(".close-overlay").removeClass("hidden");
			        // handle the adding of hover class when clicked
			        $(".img").click(function() {
			            if (!$(this).hasClass("hover")) {
			                $(this).addClass("hover");
			            }
			        });
			        // handle the closing of the overlay
			        $(".close-overlay").click(function(e){
			            e.preventDefault();
			            e.stopPropagation();
			            if ($(this).closest(".img").hasClass("hover")) {
			                $(this).closest(".img").removeClass("hover");
			            }
			        });
			    } else {
			        // handle the mouseenter functionality
			        $(".img").mouseenter(function(){
			            $(this).addClass("hover");
			        })
			        // handle the mouseleave functionality
			        .mouseleave(function(){
			            $(this).removeClass("hover");
			        });
			    }
			});
	
		/* ==========================================================================
		Load / Resize
		========================================================================== */

			$(window).load(function() {
				// resize window
					resizeFs();
				
				// init menu toggle
					$('.nav_slide_button').click(function() {
						$('.pull').slideToggle();
					});
					
				// loader
					$('#loader').delay(350).fadeOut('slow', function() {
						$('body').removeClass('no-scroll');
					});
			});

			
			$(window).resize(function() {
				resizeFs();
			});			