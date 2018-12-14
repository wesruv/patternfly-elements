const gulpFactory = require("../../scripts/gulpfile.factory.js");
const rhelementPackage = require("./package.json");

const path = require("path");
const del = require("del");

const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const rename = require("gulp-rename");

gulp.task("minify-css", () => {
  return gulp
    .src(path.join(gulpFactory.TEMP_BUILD_DIR, "*.css"))
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest(gulpFactory.TEMP_BUILD_DIR));
});

gulp.task("clean-libs", () => {
  // remove reveal.umd.js which is never used (the esm version, reveal.js, does)
  return del(path.join(gulpFactory.TEMP_BUILD_DIR, "reveal.umd.js"));
});

// call the central gulp build, and pass in the custom tasks to be run pre-bundle
gulpFactory({
  ...rhelementPackage.rhelement,
  precompile: ["minify-css"],
  postbundle: ["clean-libs"]
});
