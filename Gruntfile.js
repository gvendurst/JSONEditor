module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			files:['src/*'],
			options: {
				livereload: true
			}
		},
		connect:{
			server:{
				options:{
					port:8000,
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', ['connect', 'watch']);
};