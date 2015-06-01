module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			files:['src/*']
		}

	});

	
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};