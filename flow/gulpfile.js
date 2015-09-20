var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");

var isProd = process.env.NODE_ENV === "production";
var outputFolder = isProd ? "./dist" : "./build";
var sassFiles = "src/style/**/*.scss"


gulp.task("sass", function() {
  return gulp.src(sassFiles)
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(outputFolder))
});


gulp.task("watch", function() {
  gulp.watch(sassFiles, gulp.parallel("sass"));
});
