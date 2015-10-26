module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher')
        ],
        files: [
            'extension/js/BackgroundColor.js',
            'extension/js/RandomQuote.js',
            'test/*.spec.js'
        ],
        singleRun: true
    });
};