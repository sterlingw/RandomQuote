
describe("RandomQuote", function() {
    var randomQuote = new RandomQuote();

    describe("getQuotes()", function() {
        it("should return a quote from Thomas Edison", function() {
            expect(randomQuote.getQuotes()).toContain("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>");
        });
        it("should not return a blank string", function() {
            expect(randomQuote.getQuotes()).not.toContain("");
        });
    });
    describe("getQuote()", function() {
        var quotes = randomQuote.getQuotes();

        it("should throw an error", function(){
            expect(function(){ randomQuote.getQuote(); }).toThrow();
        });
        it("should return a quote from getQuotes()", function(){
            expect(quotes).toContain(randomQuote.getQuote(quotes));
        });
    });
    describe("getImage()", function() {
        it("should return an image path", function() {
            expect(randomQuote.getImage()).toContain("img/");
        });
    });
    describe("getImageFromApi()", function() {
        it("should throw an error", function() {
            expect(function(){ randomQuote.getImageFromApi(); }).toThrow();
        });
        it("should pass false into the callback given a bad API url", function() {
            randomQuote.apiUrl = "http://example.com";
            randomQuote.getImageFromApi(function(response){
                expect(response).toBe(false);
            });
        });
        it("should not return false", function() {
            randomQuote.getImageFromApi(function(response){
                expect(response).not.toBe(false);
            });
        });
    });
    describe("setImage()", function() {
        it("should throw an error", function() {
            expect(function(){ randomQuote.setImage(); }).toThrow();
        });
    });


});