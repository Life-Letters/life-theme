'use strict';

module.exports = function(grunt) {

  var pkgConfig = grunt.file.readJSON('package.json');

  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    'pkg': pkgConfig,

    watch: {
      sass: {
        files: ['scss/*.{scss,sass}'],
        tasks: ['sass:dev']
      }
    },
    sass: {
      options: {
        outputStyle: 'nested',
        includePaths: ['./bower_components'],
      },
      dev: {
        files: {
          'styles/demo.css': 'scss/demo.scss'
        }
      }
    },
    clean: {
      dist: {
        options: {
          force: true
        },
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    },
    copy: {
      dist: {
        files: [
          {expand: true, src: ['fonts/**'], dest: '<%= pkg.dist %>'},
          {expand: true, flatten:true, src: ['styles/theme.css'], dest: '<%= pkg.dist %>'}
        ]
      }
    },
  });

  // Default task(s).
  grunt.registerTask('default', [
  		'sass:dev',
  		'watch']);

  grunt.registerTask('dist', [
      'sass:dev', 
      'clean', 
      'copy']);
};
