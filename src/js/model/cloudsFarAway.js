'use strict';
var utils = require('./../utils/utils');
var shapesUtils = require('./../utils/shapes.utils');
var AnimationLayer = require('./../ui/animationLayer');
var appSettings = require('./../settings/app.settings');

function CloudsFarAway(settings) {
    var numberOfClouds = 10;
    var maxCloudSpeed = 5;
    var clouds = [];
    var animationLayer = new AnimationLayer(settings);
    var cloudsShapes = shapesUtils.getCloudsShapes('.clouds-resources .cloud.big');

    function createClouds() {
        var direction = 1;
        for (var i = 1; i <= numberOfClouds; i++) {
            var shape = cloudsShapes[utils.getRandomInt(1, cloudsShapes.length - 1)];
            var cloud = shapesUtils.createCloud(direction, appSettings.maxWidthHeight.width,
                appSettings.maxWidthHeight.height * (3 / 5), maxCloudSpeed, shape);
            clouds.push(cloud);
            animationLayer.layer.appendChild(cloud.element);
        }
    }

    function animate() {
        clouds.forEach(function (cloud) {
            cloud.animate();
        });
    }

    createClouds();

    return {
        animate: animate
    };
}

module.exports = CloudsFarAway;
