module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    shell: {
      simple: {
        command: 'cucumber.js simple/features -r simple/steps'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-shell');
};
