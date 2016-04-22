// Gulp
/// ----------------------------------------------------------------------------

var gulp          = require('gulp'),
    clean         = require('gulp-clean'),
    plumber       = require('gulp-plumber'),
    batch         = require('gulp-batch'),
    watch         = require('gulp-watch'),
    runSequence   = require('run-sequence'),
    shell         = require('gulp-shell'),
    header        = require('gulp-header'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    browserSync   = require('browser-sync').create();

// Headers
/// ----------------------------------------------------------------------------

var pkg = require('./package.json');

var banner_css = ['/**',
  ' * <%= pkg.title %> (<%= pkg.name %>)',
  ' * <%= pkg.description %>',
  ' * by <%= pkg.author.name %> (<%= pkg.author.email %>)',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

var banner_js = ['/**',
  ' * <%= pkg.title %> (<%= pkg.name %>)',
  //' * <%= pkg.description %>',
  ' * by <%= pkg.author.name %> (<%= pkg.author.email %>)',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// Clean
/// ----------------------------------------------------------------------------

gulp.task('clean-output', function () {
	return gulp
    .src('./.temp/*/*.**', { read: false })
		.pipe(
      clean({force: true})
    );
});

gulp.task('clean-js-output', function () {
	return gulp
    .src('./assets/js/*.**', { read: false })
		.pipe(
      clean({force: true})
    );
});

// Scripts
/// ----------------------------------------------------------------------------

gulp.task('render-scripts', function() {
  return gulp.src([
      './bower_components/director/build/director.js',
      './scripts/modules/_routes.js',
      './scripts/modules/_events.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./assets/js'))
    //.pipe(uglify())
    //.pipe(header(banner_js, { pkg : pkg } ))
    //.pipe(gulp.dest('./assets/js'));
});

// SCSS
/// ----------------------------------------------------------------------------

gulp.task('sass-build', shell.task(['compass compile']));

gulp.task('autoprefixer', function () {
  var postcss       = require('gulp-postcss');
  var sourcemaps    = require('gulp-sourcemaps');
  var autoprefixer  = require('autoprefixer');
  return gulp.src('./.temp/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(header(banner_css, { pkg : pkg } ))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'));
});

// Watch
/// ----------------------------------------------------------------------------

gulp.task('watch', function () {
  watch('scripts/**/*.js', batch(function (events, done) {
    console.log('[        ] ----------------------------------------------------- =');
    gulp.start('output-js', done);
  }));
  watch('sass/**/*.scss', batch(function (events, done) {
    console.log('[        ] ----------------------------------------------------- =');
    gulp.start('output-css', done);
  }));
});

// Sequences
/// ----------------------------------------------------------------------------

gulp.task('output-js', function (callback) {
  runSequence(
    'clean-js-output',
    'render-scripts',
    function (error) {
      if (error) {
        console.log(error.message);
      }
      callback(error);
    });
});

gulp.task('output-css', function (callback) {
  runSequence(
    'clean-output',
    'sass-build',
    'autoprefixer',
    function (error) {
      if (error) {
        console.log(error.message);
      }
      callback(error);
    });
});

gulp.task('default', ['output-css']);
