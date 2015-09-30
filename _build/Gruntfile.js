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
                    "../index.html": "pages/index.jade",
                    "../about.html": "pages/about.jade",
                    "../contact.html": "pages/contact.jade"
                }
            }
        },
        
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: '../assets/styles/*.css'
            }
        },
        
        rucksack: {
            compile: {
                files: {
                    '../assets/styles/main.css': '../assets/styles/main.css'
                }
            }
        },
        
        watch: {
            sass: 
            {
                files: ['styles/*.sass'],
                tasks: ['sass','postcss:dist','rucksack'],
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
    grunt.loadNpmTasks('grunt-rucksack');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['watch'])
}