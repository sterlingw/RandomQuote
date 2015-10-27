'use strict';
import test from 'ava';
import {Quotes} from '../extension/js/Quotes.js';

let quotes;

test.beforeEach(t => {
    quotes = Object.create(Quotes);
    quotes.init();
    t.end();
});

test('#getQuotes returns an array', t => {
    t.ok(Array.isArray(quotes.getQuotes()));
    t.end();
});

test('#getRandomQuote returns a quote', t => {
    var quotesArray = quotes.getQuotes();
    var quote = quotes.getRandomQuote();

    t.ok(quotesArray.indexOf(quote) > 0);
    t.end();
});
