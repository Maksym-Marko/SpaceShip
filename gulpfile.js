const gulp 			= require( 'gulp' );
const babel 		= require( 'gulp-babel' );
const concat 		= require( 'gulp-concat' );
const plumber 		= require( 'gulp-plumber' );
const minify 		= require( 'gulp-minify' );
const sourcemaps 	= require( 'gulp-sourcemaps' );

// compress
gulp.task( 'compress', () => {
	return gulp.src('app/es5/**/*.js')
		.pipe(minify({
	        ext:{
	        	src:'-debug.js',
	        	min:'.min.js'
	        }
	    }))
	    .pipe(gulp.dest('build/assets/js'))
	    .pipe(gulp.dest('demo/assets/js'))
} );

// compile
gulp.task('goBabel', () =>
    gulp.src( [
    		'app/js/inc/helpers.js',
    		'app/js/inc/Management.js',
    		'app/js/inc/DrawElementInCanvas.js',
    		'app/js/inc/FinallClass.js',
    		'app/js/index.js'
    	] )
    	.pipe( plumber() )
        // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.js'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/es5/'))
);

gulp.task( 'watch', () => {
	gulp.watch( 'app/js/**/*.js', ['goBabel', 'compress'] )
} );