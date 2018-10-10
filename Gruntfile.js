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
			options: {
				resources: [
					'<%= dir.bower_components %>/openui5-sap.ui.core/resources',
					'<%= dir.bower_components %>/openui5-sap.m/resources',
					'<%= dir.bower_components %>/openui5-themelib_sap_bluecrystal/resources',
					'<%= dir.bower_components %>/openui5-sap.ui.layout/resources'
				]
			},
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

		openui5_preload: {
			component: {
				options: {
					resources: {
						cwd: '<%= dir.webapp %>',
						prefix: 'todo'
					},
					dest: '<%= dir.dist %>'
				},
				components: true
			}
		},

		clean: {
			dist: '<%= dir.dist %>/'
		},

		copy: {
			dist: {
				files: [ {
					expand: true,
					cwd: '<%= dir.webapp %>',
					src: [
						'**',
						'!test/**'
					],
					dest: '<%= dir.dist %>'
				} ]
			}
		},

		eslint: {
			webapp: ['<%= dir.webapp %>']
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
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-openui5');
	grunt.loadNpmTasks('grunt-eslint');

	// Server task
	grunt.registerTask('serve', function(target) {
		grunt.task.run('openui5_connect:' + (target || 'src'));
	});

	// Linting task
	grunt.registerTask('lint', ['eslint']);

	// Build task
	grunt.registerTask('build', ['openui5_preload', 'copy']);

	// Default task
	grunt.registerTask('default', [
        'serve',
		'watch'

	]);
	// Task without Preloading
	grunt.registerTask('nonPreload',['serve']);
};
