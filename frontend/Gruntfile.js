'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    copy: false,
                    targetDir: 'src/libs/extern/'
                }
            }
        }
    });


};