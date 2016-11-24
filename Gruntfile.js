//----------------------------------------------------------------------------------------------------------------------
// VueMirror Gruntfile.
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt)
{
    grunt.initConfig({
        clean: ['index.js', 'debug.js', 'example/example.js'],
        browserify: {
            options: {
                transform: [
                    ["vueify"]
                ]
            },
            example: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                },
                files: {
                    "./example/example.js": "example/app.js"
                }
            },
            prod: {
                options: {
                    browserifyOptions: {
                        bundleExternal: false,
                        standalone: 'vuemirror'
                    }
                },
                files: {
                    "./index.js": "src/vuemirror.js"
                }
            },
            debug: {
                options: {
                    browserifyOptions: {
                        bundleExternal: false,
                        standalone: 'vuemirror',
                        debug: true
                    }
                },
                files: {
                    "./debug.js": "src/vuemirror.js"
                }
            }
        },
        watch: {
            index: {
                files: ["src/*.*", "example/**", "!example/example.js"],
                tasks: ["devel"]
            },
        }
    });

    //------------------------------------------------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //------------------------------------------------------------------------------------------------------------------

    grunt.registerTask("build", ["clean", "browserify:prod", "browserify:debug"]);
    grunt.registerTask("devel", ["clean", "browserify"]);
    grunt.registerTask("default", ["devel", "watch"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
