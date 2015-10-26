describe('BackgroundColor', function(){
    var background;
    beforeEach(function(){
        background = Object.create(BackgroundColor);
        background.init(document.body);
    });

    describe('constructor', function(){
        it('should define property element', function(){
            expect(background.element).toBeDefined();
        });
    });
    describe('property colors', function(){
        it('should define property colors', function(){
            expect(background.colors).toBeDefined();
        });
    });
    describe('#_getRandom', function(){
        it('should return an item from the given array', function(){
            var arr = ['item1', 'item2', 'item3'];
            expect(arr).toContain(background._getRandom(arr));
        });
    });
    describe('#getRandomColor', function(){
        it('should call _getRandom', function(){
            spyOn(background, '_getRandom');
            background.getRandomColor();
            expect(background._getRandom).toHaveBeenCalled();
        });
    });
    describe('#setBackgroundColor', function(){
        it('should call getRandomColor', function(){
            spyOn(background, 'getRandomColor');
            background.setBackgroundColor();
            expect(background.getRandomColor).toHaveBeenCalled();
        });
        it('update the elements background', function(){
            var oldBackground = background.element.style.background;

            background.setBackgroundColor();

            expect(background.element.style.background).not.toBe(oldBackground);
        });
    });
});