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
                    "../index.html":                "pages/index.jade",
                    "../about.html":                "pages/about.jade",
                    "../contact.html":              "pages/contact.jade",
                    "../portfolio.html":            "pages/portfolio.jade",
                    "../portfolio-info.html":       "pages/portfolio-info.jade",
                    "../obra.html":                 "pages/obra.jade",
                    "../lancamentos.html":          "pages/lancamentos.jade",
                    "../lancamentos-info.html":          "pages/lancamentos-info.jade",
                    "../investimentos.html":        "pages/investimentos.jade",
                    "../investimentos-index.html":  "pages/investimentos-index.jade",
                    "../investimentos-info.html":   "pages/investimentos-info.jade",
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
        
        imagemin: {
            dynamic: {                         // Another target 
                files: [{
                    expand: true,                  // Enable dynamic expansion 
                    cwd: '../assets/images/',      // Src matches are relative to this path 
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
                    dest: '../assets/images/'      // Destination path prefix 
                }]
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-rucksack');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['watch','imagemin'])
}