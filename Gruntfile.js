//----------------------------------------------------------------------------------------------------------------------
// VueMirror Gruntfile.
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt)
{
    grunt.initConfig({
        clean: ['index.js', 'debug.js', 'docs/docs.js'],
        browserify: {
            options: {
                transform: [
                    ["vueify"],
                ],
                plugin: [
                    ["browserify-derequire"]
                ]
            },
            example: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                },
                files: {
                    "./docs/docs.js": "docs/app.js"
                }
            },
            prod: {
                options: {
                    external: ['vue', /*'codemirror'*/],
                    browserifyOptions: {
                        standalone: 'vuemirror'
                    }
                },
                files: {
                    "./index.js": "src/vuemirror.js"
                }
            },
            debug: {
                options: {
                    external: ['vue', /*'codemirror'*/],
                    browserifyOptions: {
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
                files: ["src/*.*", "docs/**", "!docs/docs.js"],
                tasks: ["devel"]
            },
        }
    });

    //------------------------------------------------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //------------------------------------------------------------------------------------------------------------------

    grunt.registerTask("build", ["browserify:prod", "browserify:debug"]);
    grunt.registerTask("devel", ["browserify:prod", "browserify:debug", "browserify:example"]);
    grunt.registerTask("default", ["devel", "watch"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
