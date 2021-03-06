'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'CCS Crown Marketplace Frontend');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/examples');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/documentation');

/* Tell Fractal where the assets will live */
fractal.web.set('static.path', __dirname + '/public');

// destination for the static export
fractal.web.set('builder.dest', 'docs');


/* Tell Fractal that components default to work in progress */
fractal.components.set('default.status', 'wip');

/* Tell Fractal to use a white theme */
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
    skin: "white",
    nav: ["docs", "components"],
    panels: ["html", "view", "context", "resources", "info", "notes"]

});
fractal.web.theme(myCustomisedTheme);

