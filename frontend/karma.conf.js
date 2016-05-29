// Karma configuration
// Generated on Wed May 04 2016 04:09:28 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            'src/libs/extern/jquery/**/*.js',
            'src/libs/extern/angular/*.js',
            'src/libs/extern/angular-mocks/*.js',
            'target/generated-artifacts/main/script/**/*.js',
            'target/generated-artifacts/test/script/**/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['mocha'],
        port: 9876,
        logLevel: config.LOG_INFO,// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        autoWatch: false, // enable / disable watching file and executing tests whenever any file changes
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins: [
            'karma-sinon',
            'karma-mocha',
            'karma-chai',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],
        reportSlowerThan: 500,
        retryLimit: 2 // When a browser crashes, karma will try to relaunch. This defines how many times karma should relaunch a browser before giving up.
    })
};
