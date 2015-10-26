describe("Quotes", function() {
    var quoteui;
    beforeEach(function(){
        quotes = Object.create(Quotes);
        quotes.init();
    });

    describe('#getQuotes', function() {
        it('returns an array', function(){
            expect(Array.isArray(quotes.getQuotes())).toBeTruthy();
        });
    });
    describe('#getRandomQuote', function() {
        it('returns a quote', function() {
            expect(quotes.getQuotes()).toContain(quotes.getRandomQuote());
        });
    });
});