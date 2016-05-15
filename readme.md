# Life Theme

This is the official Life Letters front-end theme including:

- modified bootstrap theme
- fonts
- SASS mixins
- "Compiled" CSS distribution than can be required via npm
- an example demo file to view all components and styles



## Usage

### Install via bower

    bower install Life-Letters/life-theme --save

### To manually install, add `_include.scss` to your sass file.

If you are using a Grunt build, add the following to the `copy`
task to handle the font files:

    {
      expand: true,
      cwd: '.',
      src: 'bower_components/life-theme/fonts/*',
      dest: '<%= yeoman.dist %>'
    }


You can alter where the fonts are stored using the following
SASS variables:

    $theme-font-path: "/bower_components/life-theme/fonts/";


When using Compass in your grunt script, make sure `bower_components`
is included via the `importPath`:

    compass: {
      dev: {
        options: {
          importPath: './bower_components',
          ...

If you are using `wiredep` in your Grunt file, you should exclude your bootstrap sass files as
these are already imported via the module (they're imported in a specific order, so it's
easier to leave it to web-common). To exclude them, add the
following:

    wiredep: {
      ...
      sass: {
        ...
        exclude: [
          'bootstrap-sass',
          'font-awesome'
        ],
      }
    },

### To install the CSS/Fonts dist via npm

At times you might not want the complete SASS project in your app project (in the case where the latency it adds to your live reload is not acceptable) and you just need a compiled CSS file and Fonts package that you include as the default live letters bootstrap which you can then build upon locally in your app.

You can get the dist CSS and fonts (essentially the dist folder) into your nodeJS app like so:

In your project, in the command line hit:

    npm install --save-dev https://github.com/Life-Letters/life-theme/archive/v0.0.5.tar.gz
(Note: The v0.0.4.tar.gz is the last official distribution, consult the Github repo for the most recent version)

You can then require into your nodeJS project like so:

    require('life-theme');

This has only been tested as part of a "webpack" workflow. Essentially webpack will traverse the CSS file and extract the fonts and resources for local use. But it can work with other build packages as well.


## Development

Install

    npm install
    bower install

Build the CSS

    grunt

Run server (to view demo)

    node server.js

Build the CSS for Distribution via npm (dist)

    grunt dist
