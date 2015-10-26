describe("RandomQuote", function() {
    var rq;
    beforeEach(function(){
        var element = document.createElement('div');
        element.setAttribute('div', "quote");

        rq = Object.create(RandomQuote);
        rq.init(element);
    });

    describe('constructor', function(){
        it('should define property element', function(){
            expect(rq.element).toBeDefined();
        });
    });
    describe("property quotes", function() {
        it("should contain a quote from Thomas Edison", function() {
            expect(rq.quotes).toContain("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>");
        });
        it("should not contain a blank string", function() {
            expect(rq.quotes).not.toContain("");
        });
    });
    describe('#_getRandom', function(){
        it('should return an item from the given array', function(){
            var arr = ['item1', 'item2', 'item3'];
            expect(arr).toContain(rq._getRandom(arr));
        });
    });
    describe('#getRandom', function(){
        it('should call #_getRandom', function(){
            spyOn(rq, '_getRandom');
            rq.getRandomQuote();
            expect(rq._getRandom).toHaveBeenCalled();
        });
        it('should return an item from the quotes array', function(){
            expect(rq.quotes).toContain(rq.getRandomQuote());
        });
    });
    describe('#setQuote', function(){
        it('should return a quote', function(){
            expect(rq.quotes).toContain(rq.setQuote());
        });
        it('should update the elements innerHTML', function(){
            var old = rq.element.innerHTML;

            rq.setQuote();

            expect(rq.element.innerHTML).not.toBe(old);
        });
    });
});