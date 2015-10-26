"use strict";

var quoteUI = Object.create(QuoteUI);
quoteUI.init(document.getElementById('quote'));

var quotes = Object.create(Quotes);
quotes.init();

var backgroundColor = Object.create(BackgroundColor);
backgroundColor.init(document.body);

quoteUI.setQuote(quotes.getRandomQuote());
backgroundColor.setBackgroundColor();