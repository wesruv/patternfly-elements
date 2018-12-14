const path = require("path");
const fs = require("fs");

const gulpFactory = require("../../scripts/gulpfile.factory.js");
const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const stripCssComments = require("gulp-strip-css-comments");
const trim = require("gulp-trim");
const del = require("del");
const shell = require("gulp-shell");

let watcher;

gulp.task("clean", () => {
  return del(["./*.umd.*"]);
});

gulp.task("sass", () => {
  return gulp
    .src(path.join(gulpFactory.TEMP_BUILD_DIR, "*.scss"))
    .pipe(sass())
    .pipe(stripCssComments())
    .pipe(trim())
    .pipe(gulp.dest(gulpFactory.TEMP_BUILD_DIR));
});

gulp.task("replaceStyles", () => {
  return gulp
    .src(path.join(gulpFactory.TEMP_BUILD_DIR, "cp-theme.js"))
    .pipe(
      replace(
        /<style id="\${templateId}-style"><\/style>/g,
        '<style id="${templateId}-style">' +
          fs.readFileSync("./cp-theme.css") +
          "</style>"
      )
    )
    .pipe(gulp.dest(gulpFactory.TEMP_BUILD_DIR));
});

gulp.task("clean-temp", () => {
  return del(path.join(gulpFactory.TEMP_BUILD_DIR, "**/*"));
});

gulp.task("copy-to-temp", () => {
  return gulp
    .src(path.join(gulpFactory.SRC_DIR, "**/*"))
    .pipe(gulp.dest(gulpFactory.TEMP_BUILD_DIR));
});

gulp.task("copy-to-dest", () => {
  return gulp
    .src(path.join(gulpFactory.TEMP_BUILD_DIR, "**/*.{js,css,map}"))
    .pipe(gulp.dest(gulpFactory.DEST_DIR));
});

gulp.task("compile", () => {
  return gulp
    .src([path.join(gulpFactory.TEMP_BUILD_DIR, "cp-theme.js")])
    .pipe(
      rename({
        suffix: ".umd"
      })
    )
    .pipe(gulp.dest(gulpFactory.TEMP_BUILD_DIR));
});

gulp.task("stopwatch", done => {
  watcher.close();
  done();
});

gulp.task("watch", () => {
  watcher = gulp.watch(
    [path.join(gulpFactory.SRC_DIR, "*")],
    gulp.series("stopwatch", "build", "watch")
  );
  return watcher;
});

gulp.task("bundle", shell.task("../../node_modules/.bin/rollup -c"));

gulp.task(
  "build",
  gulp.series(
    "clean",
    "clean-temp",
    "copy-to-temp",
    "sass",
    "replaceStyles",
    "compile",
    "bundle"
  )
);

gulp.task("default", gulp.series("build"));

gulp.task("dev", gulp.series("default", "watch"));
