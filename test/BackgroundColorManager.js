'use strict';
import test from 'ava';
import {BackgroundColorManager} from '../extension/js/BackgroundColorManager.js';
import sinon from 'sinon';

let backgroundColorManager;

test.beforeEach(t => {
    let elementStub = {
        style: {
            background: 'red'
        }
    };

    backgroundColorManager = Object.create(BackgroundColorManager);
    backgroundColorManager.init(elementStub);
    t.end();
});

test('#init defines property element', t => {
    t.ok(backgroundColorManager.element);
    t.end();
});

test('#setBackgroundColor calls _updateElementBackgroundColor', t =>{
    sinon.spy(backgroundColorManager, '_updateElementBackgroundColor');
    var color = 'yellow';

    backgroundColorManager.setBackgroundColor(color);

    t.ok(backgroundColorManager._updateElementBackgroundColor.calledWith(color));

    backgroundColorManager._updateElementBackgroundColor.restore();
    t.end();
});
