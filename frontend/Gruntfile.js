'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    copy: false,
                    targetDir: 'src/libs/extern/'
                }
            }
        },
        ts: {
            application: {
                src: "src/main/scripts/domain/**",
                outDir: "target/generated-artifacts/main/script",
                options: {
                    fast: 'never',
                    module: 'commonjs',
                    sourceMap: true
                }
            }
        }
    });

    //single tasks
    grunt.registerTask('1. compile sources', [
        'ts:application'
    ]);

    //task for maven frontend plugin
    grunt.registerTask('build', [
        '1. compile sources'
    ]);

};