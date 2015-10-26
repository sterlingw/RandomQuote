describe("QuoteUI", function() {
    var quoteui;
    beforeEach(function(){
        var element = document.createElement('div');
        element.setAttribute('div', "quote");

        quoteui = Object.create(QuoteUI);
        quoteui.init(element);
    });

    describe('init', function() {
        it('defines property element', function() {
             expect(quoteui.element).toBeDefined();
         }); 
    });
    describe('#setQuote', function() {
        it('calls #_setQuoteHtml', function(){
            spyOn(quoteui, '_setQuoteHtml');
            var quote = "Hello";

            quoteui.setQuote(quote);

            expect(quoteui._setQuoteHtml).toHaveBeenCalledWith(quote);
        });
    });
});