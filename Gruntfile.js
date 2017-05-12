module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "scss/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
      dev: {
        files: {
          // destination      // source file
          "css/styles.css" : "scss/theme.scss"
        },
        options: {
          sourcemap: 'none',
          check: true,
          style: 'compressed'
        }
      }
    },
    // Autoprefixer task config
    autoprefixer:{
      dist:{
        files:{
          'css/styles.css':'css/styles.css'
        }
      }
    }
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default Task
  grunt.registerTask('default', ['watch', 'sass', 'autoprefixer']);

  // Build Task
  grunt.registerTask('build', ['sass', 'autoprefixer']);
};