// Routes
/// ----------------------------------------------------------------------------

var Router;

var Routes = {

  route_vars: {
    loaded: false,
    busy: true
  },

  initUI: function() {
    // active loading text
      setTimeout(function() {
        $('.l-loading-text').addClass('loading-active');
      }, 400);

    // fake loaded (redo into class)
      setTimeout(function() {
        Routes.route_vars.loaded = true;
        $('.l-loading-text').removeClass('loading-active');
        $('.l-loading-text').addClass('loading-done');
        $('.l-wrap').addClass('menu-hidden');
        $('.l-menu-trigger').addClass('menu-trigger-visible');
      }, 2000);

    // delay show on menu and address
      setTimeout(function(){
        $('.l-view-navigation').show();
        $('.l-view-address').show();
        $('.l-view-gallery').show();
      }, 3000);
  },

  toggleMenu: function(state) {
    if(state && state === 'on') {
      $('.l-menu-trigger a').addClass('menu-active');
      $('.l-wrap').removeClass('menu-hidden');
    } else if(state && state === 'off') {
      $('.l-menu-trigger a').removeClass('menu-active');
      $('.l-wrap').addClass('menu-hidden');
    } else {
      $('.l-menu-trigger a').toggleClass('menu-active');
      $('.l-wrap').toggleClass('menu-hidden');
    }

    Routes.toggleMainLinks('off');
    setTimeout(function(){
      Routes.toggleMainLinks('on');
    }, 1800);
  },

  toggleMainLinks: function(state) {
    if(state && state === 'on') {
      $('[data-route-links] li a').removeClass('disabled');
      $('.l-menu-trigger a').removeClass('disabled');
    } else if(state && state === 'off') {
      $('[data-route-links] li a').addClass('disabled');
      $('.l-menu-trigger a').addClass('disabled');
    }
  },

  toggleActiveMenuItem: function() {
    $('[data-route-links] li').removeClass('active');
  },

  // Route
  hi: function () {
    var that = this;
    if(Routes.route_vars.loaded) {
      Routes.toggleMenu('off');
      Routes.toggleActiveMenuItem('hi');
      console.log('hi');
    }
  },

  // Route
  projects: function () {
    var that = this;
        Routes.toggleMenu('off');
        Routes.toggleActiveMenuItem('projects');
        console.log('projects');
  },

  // Route
  people: function () {
    var that = this;
        Routes.toggleMenu('off');
        Routes.toggleActiveMenuItem('people');
        console.log('people');
  },

  // Route
  contact: function () {
    var that = this;
        Routes.toggleMenu('off');
        Routes.toggleActiveMenuItem('contact');
        console.log('contact');
  },

  // init routes
  init: function() {
    var that = this;
    /* init */
    var allroutes = function() {
      var route = window.location.hash.slice(2);
      var sections = $('section');
      var section;
          section = sections.filter('[data-route=' + route + ']');
          if (section.length) {
            sections.hide(250);
            section.show(250);
          }
      /* ready! */
      Routes.initUI();
    };

    /* define the routing table. */
    var routes = {
      '/hi': Routes.hi,
      '/projects': Routes.projects,
      '/people': Routes.people,
      '/contact': Routes.contact
    };

    /* instantiate the router */
    router = Router( routes );

    /* a global configuration setting. */
    router.configure({
      on: allroutes
    });

    // init and set route
    router.init('/hi');
    router.setRoute('/hi');
  }
};
