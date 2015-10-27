'use strict';
import test from 'ava';
import {QuoteUI} from '../extension/js/QuoteUI.js';
import sinon from 'sinon';

let quoteUI;

test.beforeEach(t => {
    quoteUI = Object.create(QuoteUI);
    quoteUI.init({});
    t.end();
});

test('init', t => {
    t.not(quoteUI.element, undefined, 'defines property element');
    t.end();
});

test('#setQuote calls #_setQuoteHtml', t => {
    sinon.spy(quoteUI, '_setQuoteHtml');
    let quote = "Hello";

    quoteUI.setQuote(quote);

    t.ok(quoteUI._setQuoteHtml.calledWith(quote));

    quoteUI._setQuoteHtml.restore();
    t.end();
});
