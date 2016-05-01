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
        config: {
            targetWebapp: 'target/classes/static'
        },
        clean: ['target'],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/main/resources',
                        src: ['**/*.*'],
                        dest: 'target/classes/static'
                    }
                ]
            }
        },
        ts: {
            application: {
                src: 'src/main/scripts/domain/**',
                outDir: 'target/generated-artifacts/main/script',
                options: {
                    fast: 'never',
                    module: 'commonjs',
                    sourceMap: true
                }
            }
        },
        uglify: {
            target: {
                options: {
                    "sourceMap": false,
                    "mangle": false,
                    "compress": false,
                    "beautify": true
                },
                files: [
                    {
                        src: 'target/generated-artifacts/main/script/**/*.js',
                        dest: 'target/classes/static/scripts/app.min.js'
                    },
                    {
                        src: 'src/libs/extern/**/*.js',
                        dest: 'target/classes/static/scripts/extern-libs.min.js'
                    }
                ]
            }
        }
    });

    //single tasks
    grunt.registerTask('1. clean', [
        'clean'
    ]);

    grunt.registerTask('2. compile sources', [
        'ts:application'
    ]);

    grunt.registerTask('3. process sources', [
        'uglify:target',
        'copy:main'
    ]);

    //task for maven frontend plugin
    grunt.registerTask('build', [
        '1. clean',
        '2. compile sources',
        '3. process sources'
    ]);

};