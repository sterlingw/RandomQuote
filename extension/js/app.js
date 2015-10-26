"use strict";

var quoteUI = Object.create(QuoteUI);
quoteUI.init(document.getElementById('quote'));

var quotes = Object.create(Quotes);
quotes.init();

var backgroundColorManager = Object.create(BackgroundColorManager);
backgroundColorManager.init(document.body);

var backgroundColors = Object.create(BackgroundColors);
backgroundColors.init();

quoteUI.setQuote(quotes.getRandomQuote());
backgroundColorManager.setBackgroundColor(backgroundColors.getRandomColor());
