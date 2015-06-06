
describe("RandomQuote", function() {
    var rq = new RandomQuote();

    describe("quotes", function() {
        it("should contain a quote from Thomas Edison", function() {
            expect(rq.quotes).toContain("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>");
        });
        it("should not contain a blank string", function() {
            expect(rq.quotes).not.toContain("");
        });
    });
    describe("setBackgroundColor()", function() {
        it("should throw an error", function() {
            expect(function(){ rq.setBackgroundColor() }).toThrowError();
        });
        it("should change the body background color", function() {
            var oldBackground = document.body.style.background,
                newBackground = rq.setBackgroundColor(rq.getRandom(rq.colors));

            expect(oldBackground != newBackground).toBe(true);
        });
    });
});