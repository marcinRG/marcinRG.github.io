'use strict';
var utils = require('./../utils/utils');
var settings = require('./../settings/app.settings');
var Cloud = require('./cloud');

function Clouds() {
    var cloudsShapesArray = [];
    var cloudsLayersArray = [];
    var clouds = [];

    function getCloudsShapes() {
        var array = Array.from(document.querySelectorAll(settings.cloudsShapesSelector));
        if (array && array.length >= 0) {
            return array.map(function (element) {
                var path = element.getAttribute('d');
                return path;
            });
        }
    }

    function getCloudsLayers() {
        if (settings.cloudsLayersSelectors && settings.cloudsLayersSelectors.length >= 0) {
            var array = [];
            settings.cloudsLayersSelectors.forEach(function (selector) {
                var cloudsLayer = document.querySelector(selector);
                if (cloudsLayer && cloudsLayer instanceof Element) {
                    array.push(cloudsLayer);
                }
            });
            return array;
        }
    }

    function init() {
        cloudsShapesArray = getCloudsShapes();
        cloudsLayersArray = getCloudsLayers();
        createClouds();
    }

    function createClouds() {
        console.log('creating clouds');
        var numberOfClouds = utils.getRandomInt(10, cloudsShapesArray.length * cloudsLayersArray.length);
        console.log(numberOfClouds);
        var direction = 1;
        for (var i = 1; i <= numberOfClouds; i++) {
            var cloud = createCloud(direction);
            clouds.push(cloud);
            var cloudLayer = cloudsLayersArray[utils.getRandomInt(0, cloudsLayersArray.length - 1)];
            cloudLayer.appendChild(cloud.element);
        }
    }

    function createCloud(direction) {
        var posX = utils.getRandomInt(0, settings.maxWidthHeight.width);
        var posY = utils.getRandomInt(0, settings.maxWidthHeight.height - 350);
        var cloudPath = cloudsShapesArray[utils.getRandomInt(0, cloudsShapesArray.length - 1)];
        var speed = utils.getRandomInt(1, 20);
        var strokeWidth = '1';
        var cloud = new Cloud({
            d: cloudPath,
            className: 'cloud',
            'stroke-width': strokeWidth,
            x: posX,
            y: posY,
            speed: speed,
            direction: direction
        });
        return cloud;
    }

    function animate() {
        console.log('animate');
        clouds.forEach(function (cloud) {
            cloud.animate();
        });
    }

    return {
        run: init,
        animate: animate
    };
}

module.exports = Clouds;
