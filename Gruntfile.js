'use strict';

module.exports = function(grunt) {

  var pkgConfig = grunt.file.readJSON('package.json');

  // Project configuration.
  grunt.initConfig({
    'pkg': pkgConfig,

    watch: {
      compass: {
        files: ['scss/*.{scss,sass}'],
        tasks: ['compass:dev']
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: ['scss'],
          cssDir: ['styles'],
          importPath: './bower_components',
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

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
  		'compass:dev',
  		'watch']);

  grunt.registerTask('dist', ['compass:dev', 'clean', 'copy']);
};
