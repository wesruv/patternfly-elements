const TEMP_BUILD_DIR = "./.build/";
const DEST_DIR = "./";
const SRC_DIR = "./src/";

module.exports = function factory({
  elementName,
  className,
  precompile = [],
  postbundle = []
} = {}) {
  const fs = require("fs");
  const path = require("path");
  const del = require("del");

  const gulp = require("gulp");
  const rename = require("gulp-rename");
  const replace = require("gulp-replace");
  const stripCssComments = require("strip-css-comments");
  const trim = require("trim");
  const decomment = require("decomment");
  const sass = require("node-sass");
  const shell = require("gulp-shell");

  gulp.task("compile", () => {
    return gulp
      .src(path.join(TEMP_BUILD_DIR, `${elementName}.js`))
      .pipe(
        replace(
          /^(import .*?)(['"]\.\.\/(?!\.\.\/).*)\.js(['"];)$/gm,
          "$1$2.umd$3"
        )
      )
      .pipe(
        rename({
          suffix: ".umd"
        })
      )
      .pipe(gulp.dest(TEMP_BUILD_DIR));
  });

  gulp.task("clean-temp", () => {
    return del(path.join(TEMP_BUILD_DIR, "**/*"));
  });

  gulp.task("copy-to-temp", () => {
    return gulp.src(path.join(SRC_DIR, "**/*")).pipe(gulp.dest(TEMP_BUILD_DIR));
  });

  gulp.task("copy-to-dest", () => {
    return gulp
      .src(path.join(TEMP_BUILD_DIR, "**/*.{js,css,map}"))
      .pipe(gulp.dest(DEST_DIR));
  });

  gulp.task("merge", () => {
    return gulp
      .src(path.join(TEMP_BUILD_DIR, `${elementName}.js`))
      .pipe(
        replace(
          /extends\s+RHElement\s+{/g,
          (classStatement, character, jsFile) => {
            // extract the templateUrl and styleUrl with regex.  Would prefer to do
            // this by require'ing rh-something.js and asking it directly, but without
            // node.js support for ES modules, we're stuck with this.
            const oneLineFile = jsFile
              .slice(character)
              .split("\n")
              .join(" ");
            const [
              ,
              templateUrl
            ] = /get\s+templateUrl\([^)]*\)\s*{\s*return\s+"([^"]+)"/.exec(
              oneLineFile
            );

            let html = fs
              .readFileSync(path.join("./src", templateUrl))
              .toString()
              .trim();

            html = decomment(html);

            const [
              ,
              styleUrl
            ] = /get\s+styleUrl\([^)]*\)\s*{\s*return\s+"([^"]+)"/.exec(
              oneLineFile
            );

            const styleFilePath = path.join("./src", styleUrl);

            let cssResult = sass.renderSync({
              file: styleFilePath
            }).css;

            cssResult = stripCssComments(cssResult).trim();

            return `${classStatement}
  get html() {
    return \`
<style>
${cssResult}
</style>
${html}\`;
  }
`;
          }
        )
      )
      .pipe(gulp.dest(TEMP_BUILD_DIR));
  });

  gulp.task("watch", () => {
    return gulp.watch("./src/*", gulp.series("build"));
  });

  gulp.task("bundle", shell.task("../../node_modules/.bin/rollup -c"));

  const buildTasks = [
    "clean-temp",
    "copy-to-temp",
    "merge",
    ...precompile,
    "compile",
    "bundle",
    ...postbundle
  ];

  gulp.task("build", gulp.series(...buildTasks));

  gulp.task("default", gulp.series("build"));

  gulp.task("dev", gulp.series("build", "watch"));

  return gulp;
};

module.exports.TEMP_BUILD_DIR = TEMP_BUILD_DIR;
module.exports.DEST_DIR = DEST_DIR;
module.exports.SRC_DIR = SRC_DIR;
