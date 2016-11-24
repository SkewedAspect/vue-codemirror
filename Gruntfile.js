//----------------------------------------------------------------------------------------------------------------------
// VueMirror Gruntfile.
//----------------------------------------------------------------------------------------------------------------------

module.exports = function(grunt)
{
    grunt.initConfig({
        clean: ['dist'],
        browserify: {
            options: {
                browserifyOptions: {
                    bundleExternal: false,
                    debug: true
                },
                transform: [
                    ["vueify"]
                ]
            },
            debug: {
                options: {
                    watch: true,
                    watchOptions: {
                        ignoreWatch: true
                    },
                    browserifyOptions: {
                        bundleExternal: false,
                        debug: true
                    }
                },
                files: {
                    "./index.js": "src/vuemirror.js"
                }
            }
        }
    });

    //------------------------------------------------------------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');

    //------------------------------------------------------------------------------------------------------------------

    grunt.registerTask("build", ["clean", "browserify"]);
    grunt.registerTask("default", ["build"]);

    //------------------------------------------------------------------------------------------------------------------
};

//----------------------------------------------------------------------------------------------------------------------
