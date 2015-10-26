describe("BackgroundColorManager", function() {
    var backgroundColorManager;
    beforeEach(function(){
        backgroundColorManager = Object.create(BackgroundColorManager);
        backgroundColorManager.init(document.body);
    });

    describe('init', function() {
        it('defines property element', function() {
             expect(backgroundColorManager.element).toBeDefined();
         }); 
    });
    describe('#setBackgroundColor', function() {
        it('calls _updateElementBackgroundColor', function(){
            spyOn(backgroundColorManager, '_updateElementBackgroundColor');
            var color = "white";

            backgroundColorManager.setBackgroundColor(color);

            expect(backgroundColorManager._updateElementBackgroundColor).toHaveBeenCalledWith(color);
        });
    });
});