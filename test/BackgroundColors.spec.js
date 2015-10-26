describe("BackgroundColors", function() {
    var backgroundColors;
    beforeEach(function(){
        backgroundColors = Object.create(BackgroundColors);
        backgroundColors.init();
    });

    describe('#getColors', function() {
        it('returns an array', function(){
            expect(Array.isArray(backgroundColors.getColors())).toBeTruthy();
        });
    });
    describe('#getRandomColor', function() {
        it('returns a color', function(){
            expect(backgroundColors.getColors()).toContain(backgroundColors.getRandomColor());
        });
    });
});