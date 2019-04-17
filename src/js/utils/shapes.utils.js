'use strict';
var utils = require('./utils');
var svgUtils = require('./svg.utils');
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

function createStar(maxWidth, maxHeight, maxRadius) {
    var cX = utils.getRandomInt(0, maxWidth);
    var cY = utils.getRandomInt(0, maxHeight);
    var r = utils.getRandomInt(1, maxRadius);
    var star = svgUtils.createCircle({
        className: 'star',
        cx: cX,
        cy: cY,
        r: r
    });
    return star;
}

function createCloud(direction, maxWidth, maxHeight, maxSpeed, cloudPath) {
    var posX = utils.getRandomInt(0, maxWidth);
    var posY = utils.getRandomInt(0, maxHeight);
    var speed = utils.getRandomInt(1, maxSpeed);
    var cloud = new Cloud({
        d: cloudPath,
        className: 'cloud',
        x: posX,
        y: posY,
        speed: speed,
        direction: direction
    });
    return cloud;
}

module.exports = {
    getCloudsShapes: getCloudsShapes,
    createCloud: createCloud,
    createStar: createStar
};
