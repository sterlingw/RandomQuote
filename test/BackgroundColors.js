'use strict';
import test from 'ava';
import {BackgroundColors} from '../extension/js/BackgroundColors.js';

let backgroundColors;

test.beforeEach(t => {
    backgroundColors = Object.create(BackgroundColors);
    backgroundColors.init();
    t.end();
});

test('#getColors returns an array', t => {
    t.ok(Array.isArray(backgroundColors.getColors()));
    t.end();
});

test('#getRandomColor returns a color', t => {
    var colors = backgroundColors.getColors();
    var color = backgroundColors.getRandomColor();

    t.ok(colors.indexOf(color) > -1);
    t.end();
});
