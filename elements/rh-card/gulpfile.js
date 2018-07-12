const fs = require("fs");
const path = require("path");

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const stripCssComments = require("strip-css-comments");
const trim = require("trim");
const sass = require("node-sass");

gulp.task("compile", () => {
  return gulp
    .src("./rh-card.js")
    .pipe(
      replace(
        /^(import .*?)(['"]\.\.\/(?!\.\.\/).*)(\.js['"];)$/gm,
        "$1$2.compiled$3"
      )
    )
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".compiled"
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("watch", () => {
  return gulp.watch("./src/*", gulp.series("merge", "compile"));
});

gulp.task("merge", () => {
  return gulp
    .src("./src/rh-card.js")
    .pipe(
      replace(/extends\s+Rhelement\s+{/, classStatement => {
        console.log("classStatement", classStatement);

        const html = fs
          .readFileSync("./src/rh-card.html")
          .toString()
          .trim();

        console.log("html", html);

        const cssResult = sass.renderSync({
          file: "./src/rh-card.scss"
        }).css;

        return `${classStatement}
  get html() {
    return \`
<style>
${stripCssComments(cssResult).trim()}
</style>

${html}\`;
  }
`;

        // return `<style>${stripCssComments(cssResult).trim()}</style>
        // ${html}`;
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("default", gulp.series("merge", "compile"));

gulp.task("dev", gulp.series("merge", "compile", "watch"));
