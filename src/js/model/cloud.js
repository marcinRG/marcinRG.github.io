'use strict';

var svgUtils = require('./../utils/svg.utils');

function Cloud(settings) {
    var element = null;
    var x;
    var y;
    var direction;
    var speed;

    function init(settings) {
        var elem = svgUtils.createPath(settings);
        if (elem) {
            element = elem;
        }
        setPositionDirectionSpeed(settings);
        setElementPosition(x, y);
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

    init(settings);
    return {
        x: x,
        y: y,
        speed: speed,
        direction: direction,
        element: element
    };
}

module.exports = Cloud;
