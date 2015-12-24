/// <binding Clean='clean' />

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    jshint = require('gulp-jshint');
    project = require("./project.json");

var paths = {
    webroot: "./" + project.webroot + "/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task('libs', function () {
    gulp.src([
     paths.webroot + 'lib/angular/angular.js',
     paths.webroot + 'lib/angular-ui-router/release/angular-ui-router.js'
     
    ])
   .pipe(concat('libs.js'))
  // .pipe(uglify())
   .pipe(gulp.dest(paths.webroot + 'js'));

});

/** Processes AngularJS code for concation and minify */
gulp.task('angular', function () {

    return gulp.src([paths.webroot + 'js/app/angular.app.js',
                    paths.webroot + 'js/app/**/*.app.js',
                    paths.webroot + 'js/app/client/*.service.js',
                    paths.webroot + 'js/app/client/*.controller.js',
                    paths.webroot+'js/app/client/*.directive.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    //.pipe(ngAnnotate())
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.webroot+'js'));
});
gulp.task("default", ["libs", "angular"]);
