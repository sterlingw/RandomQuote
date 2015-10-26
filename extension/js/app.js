"use strict";

var randomQuote = Object.create(RandomQuote);
randomQuote.init(document.getElementById('quote'));

var backgroundColor = Object.create(BackgroundColor);
backgroundColor.init(document.body);

randomQuote.setQuote();
backgroundColor.setBackgroundColor();
