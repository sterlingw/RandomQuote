'use strict';
import {QuoteUI} from './QuoteUI.js';
import {Quotes} from './Quotes.js';
import {BackgroundColorManager} from './BackgroundColorManager.js';
import {BackgroundColors} from './BackgroundColors.js';

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
