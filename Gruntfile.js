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
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
};