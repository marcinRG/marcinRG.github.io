'use strict';
var utils = require('./utils');
var Cloud = require('./../model/cloud');

function getCloudsShapes(cloudSelector) {
    var array = Array.from(document.querySelectorAll(cloudSelector));
    if (array && array.length >= 0) {
        return array.map(function (element) {
            var path = element.getAttribute('d');
            return path;
        });
    }
}

function createCloud(direction, maxWidth, maxHeight, maxSpeed, cloudPath) {
    var posX = utils.getRandomInt(0, maxWidth);
    var posY = utils.getRandomInt(0, maxHeight);
    var speed = utils.getRandomInt(1, maxSpeed);
    var cloud = new Cloud({
        d: cloudPath,
        className: 'cloud',
        'stroke-width': '1',
        x: posX,
        y: posY,
        speed: speed,
        direction: direction
    });
    return cloud;
}

module.exports = {
    getCloudsShapes: getCloudsShapes,
    createCloud: createCloud
};
