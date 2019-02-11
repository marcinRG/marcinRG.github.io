'use strict';

var svgUtils = require('./../utils/svg.utils');
var appSettings = require('./../settings/app.settings');

function Cloud(settings) {
    var element = null;
    var x;
    var y;
    var direction;
    var speed;
    var speedModifier = 0.1;

    function init(settings) {
        var elem = svgUtils.createPath(settings);
        if (elem) {
            element = elem;
            setPositionDirectionSpeed(settings);
            setElementPosition(x, y);
        }
    }

    function setPositionDirectionSpeed(settings) {
        if (settings.x && settings.y) {
            x = settings.x;
            y = settings.y;
        }
        direction = settings.direction || 0;
        speed = settings.speed || 0;
    }

    function setElementPosition(x, y) {
        if (element && x && y) {
            element.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
        }
    }

    function animate() {
        if (x >= appSettings.maxWidthHeight.width) {
            x = 0 - element.getBBox().width - 1;
        }
        x = x + direction * speed * speedModifier;
        setElementPosition(x, y);
    }

    init(settings);
    return {
        x: x,
        y: y,
        speed: speed,
        direction: direction,
        element: element,
        animate: animate
    };
}

module.exports = Cloud;
