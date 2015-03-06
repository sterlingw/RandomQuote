
describe("RandomQuote module", function() {
    var randomQuote = new RandomQuote();

    it("expects randomQuote.getQuotes() to contain a quote from Thomas Edison.", function() {
        expect(randomQuote.getQuotes()).toContain("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>");
    });


});