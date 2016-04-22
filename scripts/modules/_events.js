$(document).ready(function() {

  // Init director routes
    Routes.init();

  // Menu trigger
    $(document).on('click', '.l-menu-trigger a', function(e) {
      e.preventDefault();
        Routes.toggleMenu();
    });

  // Navigation click
    $(document).on('click', '[data-route-links] a', function() {
      $(this).parent().addClass('active');
    });

});
