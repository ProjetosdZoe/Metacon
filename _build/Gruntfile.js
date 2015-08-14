module.exports = function(grunt){
    grunt.initConfig({
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'   // nested, compact, compressed, expanded.
                },
                files: {
                    '../assets/styles/main.css': 'styles/main.sass',
                }
            }
        },
        
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    "../index.html": "pages/index.jade"
                }
            }
        },
        
        watch: {
            sass: 
            {
                files: ['styles/*.sass'],
                tasks: ['sass'],
                options: {
                  livereload: true,
                }
            },
            jade: 
            {
                files: ['pages/*.jade'],
                tasks: ['jade'],
                options: {
                  livereload: true,
                }
            },
            js:
            {
                files: ['../assets/scripts/*.js'],
                options: {
                  livereload: true,
                }
            }
        },
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.registerTask('default', ['watch'])
}