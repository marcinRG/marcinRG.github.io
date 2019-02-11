'use strict';
var utils = require('./../utils/utils');
var settings = require('./../settings/app.settings');
var svgUtils = require('./../utils/svg.utils');

function Stars() {
    var skyLayer;

    function getSkyLayer() {
        return document.querySelector(settings.starsAndSunLayerSelector);
    }

    function createClouds() {
        console.log('create stars');
        var numberOfStars = utils.getRandomInt(70, 270);
        console.log(numberOfStars);
        for (var i = 0; i < numberOfStars; i++) {
            var cX = utils.getRandomInt(0, settings.maxWidthHeight.width);
            var cY = utils.getRandomInt(0, settings.maxWidthHeight.height);
            var r = utils.getRandomInt(1, 4);
            var star = svgUtils.createCircle({
                className: 'star',
                cx: cX,
                cy: cY,
                r: r
            });
            skyLayer.appendChild(star);
        }
    }

    function init() {
        skyLayer = getSkyLayer();
        if (skyLayer) {
            createClouds();
        }
    }

    return {
        run: init
    };
}

module.exports = Stars;
