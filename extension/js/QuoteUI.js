'use strict';

exports.QuoteUI = {
    init: function(element){
        this.element = element;
    },
    _setQuoteHtml: function(quote){
        this.element.innerHTML = quote;
    },
    setQuote: function(quote){
        return this._setQuoteHtml(quote);
    }
};
