"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./docs/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./docs/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./docs/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./docs/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./docs/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./docs/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/favicon.svg",
            dist: "./docs/img/favicons/",
            json: "./gulp-tasks/faviconData.json",
            iconPatch: "img/favicons/",
            htmlPatch: "./docs/*.html",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./docs/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel("favicons"),
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts"]),
    gulp.parallel("inject-favicon-markups"),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "gzip"]));

export default development;