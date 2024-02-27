"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import favicons from "gulp-real-favicon";
const fs = require("fs");

gulp.task("favicons", (done) => {
    favicons.generateFavicon({
        masterPicture: paths.favicons.src,
        dest: paths.favicons.dist,
        iconsPath:  paths.favicons.iconPatch,
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser: {
                design: 'raw'
            },
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#da532c',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                }
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: false,
            usePathAsIs: false
        },
        markupFile: paths.favicons.json
    }, function() {
        done()
    })

});

gulp.task("inject-favicon-markups", (done) => {
    fs.readFile(paths.favicons.json, (err, data) => {
        if (err) throw err;
        const faviconHtmlCode = JSON.parse(data).favicon.html_code;
        gulp.src(paths.favicons.htmlPatch)
            .pipe(favicons.injectFaviconMarkups(faviconHtmlCode))
            .pipe(gulp.dest(paths.views.dist));
    })
    done()
});

gulp.task("check-for-favicon-update", (done) => {
    fs.readFile(paths.favicons.json, (err, data) => {
        if (err) throw err;
        const currentVersion = JSON.parse(data).version;
        favicons.checkForUpdates(currentVersion, function() {
            done()
        });
    })
});