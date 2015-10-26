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
            'extension/js/QuoteUI.js',
            'extension/js/Quotes.js',
            'extension/js/BackgroundColorManager.js',
            'extension/js/BackgroundColors.js',
            'test/*.spec.js'
        ],
        singleRun: true
    });
};