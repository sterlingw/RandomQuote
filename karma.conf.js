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
            'extension/BackgroundColor.js',
            'extension/RandomQuote.js',
            'test/*.spec.js'
        ]
    });
};