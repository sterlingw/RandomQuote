
describe("RandomQuote module", function() {
    var randomQuote = new RandomQuote();

    describe("randomQuote.getQuotes()", function() {
        it("expects the return to include a quote from Thomas Edison.", function() {
            expect(randomQuote.getQuotes()).toContain("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>");
        });
        it("expects the return not to include a blank string.", function() {
            expect(randomQuote.getQuotes()).not.toContain("");
        });
    });

    describe("randomQuote.getQuoteFromLocal()", function() {
        it("returns a quote from the list returned by randomQuote.getQuotes().", function() {
            expect(randomQuote.getQuotes()).toContain(randomQuote.getQuoteFromLocal(randomQuote.getQuotes()));
        });
    });

    describe("randomQuote.getImageFromLocal()", function() {
        var img = randomQuote.getImageFromLocal();

        it("image path starts with img/", function() {
            expect(img.substring(0, 4)).toEqual("img/");
        });
    });


});