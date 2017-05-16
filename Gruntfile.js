module.exports = function(grunt) {

  // Configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'css/styles.css': 'scss/theme.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'css/styles.css':'css/styles.css'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['scss/*.scss'],
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        }
      }
    }
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};