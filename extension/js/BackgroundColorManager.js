"use strict";

var BackgroundColorManager = {
    init: function(element){
        this.element = element;
    },
    _updateElementBackgroundColor: function(color){
        this.element.style.background = color;
    },
    setBackgroundColor: function(color){
        return this._updateElementBackgroundColor(color);
    }
};