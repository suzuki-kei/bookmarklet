
const {series, src, dest} = require("gulp")
const rename = require("gulp-rename")
const replace = require("gulp-replace")
const terser = require("gulp-terser")
const terser_html = require("gulp-html-minifier-terser")

const SOURCE_DIR = "src/main"
const DESTINATION_DIR = "bookmarklets"

const MINIFY_JS_OPTIONS = {
    mangle: true,
}

const MINIFY_HTML_OPTIONS = {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: MINIFY_JS_OPTIONS,
}

const build = series(buildJs, buildHtml)

function buildHtml() {
    return src(SOURCE_DIR + "/*.html")
            .pipe(terser_html(MINIFY_HTML_OPTIONS))
            .pipe(replace(/^/, "data:text/html, "))
            .pipe(rename({extname: ""}))
            .pipe(dest(DESTINATION_DIR))
}

function buildJs() {
    return src(SOURCE_DIR + "/*.js")
            .pipe(terser(MINIFY_JS_OPTIONS))
            .pipe(replace(/^/, "javascript:"))
            .pipe(rename({extname: ""}))
            .pipe(dest(DESTINATION_DIR))
}

exports.build = build
exports.default = build

