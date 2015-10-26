"use strict";

/**
 *
 */
var BackgroundColor = {
    init: function(element) {
        this.element = element;
    },
    colors: [
        "F44336",
        "9C27B0",
        "673AB7",
        "E91E63",
        "3F51B5",
        "2196F3",
        "03A9F4",
        "00BCD4",
        "009688",
        "4CAF50",
        "8BC34A",
        "CDDC39",
        "FFC107",
        "FF9800",
        "FF5722",
        "607D8B"
    ],
    /**
     * @private
     * @return - Random item from the given array.
     */
    _getRandom: function(array) {
        if (typeof array === 'undefined') throw new Error("An array is required.");
        return array[Math.floor(Math.random()*(array.length))];
    },
    /**
     * @private
     */
    _setBackground: function(color) {
        this.element.style.background = color;
    },
    /**
     * @return {string} - Random color hex.
     */
    getRandomColor: function() {
        return ('#' + this._getRandom(this.colors));
    },
    /** 
     * @return {string} - Hex that was set as the background color.
     */
    setBackgroundColor: function() {
        var color = this.getRandomColor();

        this._setBackground(color);

        return color;
    }
};
