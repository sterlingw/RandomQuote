'use strict';

exports.BackgroundColors = {
    init: function(){

    },
    getColors: function(){
        return [
            "#F44336",
            "#9C27B0",
            "#673AB7",
            "#E91E63",
            "#3F51B5",
            "#2196F3",
            "#03A9F4",
            "#00BCD4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFC107",
            "#FF9800",
            "#FF5722",
            "#607D8B"
        ];
    },
    getRandomColor: function(){
        return this.getColors()[Math.floor(Math.random() * this.getColors().length)];
    }
};
