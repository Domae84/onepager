'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		dir: {
			webapp: 'SteckBriefUI/webapp',
			dist: 'dist',
			bower_components: 'bower_components'
		},

		connect: {
			options: {
				port: 8888,
				hostname: '*'
			},
			src: {},
			dist: {}
		},

		openui5_connect: {
			src: {
				options: {
					appresources: '<%= dir.webapp %>'
				}
			},
			dist: {
				options: {
					appresources: '<%= dir.dist %>'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			js: {
				files: ['<%= dir.webapp %>/**/*.js'
				]
			},
			xml: {
				files: ['<%= dir.webapp %>/**/*.xml']
			},
			less: {
				files: ['<%= dir.webapp %>/**/*.less'],
				tasks: ['less:compile']
			},
            css: {
                files: ['<%= dir.webapp %>/**/*.css']
            },
			html: {
				files: ['<%= dir.webapp %>/**/*.html']
			},
			properties:{
                files: ['<%= dir.webapp %>/**/*.properties']
			}
		}

	});

	// These plugins provide necessary tasks.
    grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
    grunt.registerTask("default", [
        "clean",
        "lint",
        "build"
    ]);
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-openui5');

	// Server task
	grunt.registerTask('serve', function(target) {
		grunt.task.run('openui5_connect:' + (target || 'src'));
	});

	// Default task
	grunt.registerTask('develop', [
        'serve',
		'watch'
	]);
};
