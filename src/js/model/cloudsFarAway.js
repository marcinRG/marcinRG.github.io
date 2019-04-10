'use strict';
var utils = require('./../utils/utils');
var cloudUtils = require('./../utils/clouds.utils');
var AnimationLayer = require('./../ui/animationLayer');
var settings = require('./../settings/app.settings');

function CloudsFarAway(settings) {
    var numberOfClouds = 6;
    var maxCloudSpeed = 5;
    var animationLayer = new AnimationLayer(settings);
    var cloudsShapes = cloudUtils.getCloudsShapes('.clouds.big');

    function createClouds() {
        var clouds = [];
        console.log('creating clouds');
        var direction = 1;
        for (var i = 1; i <= numberOfClouds; i++) {
            var shape = cloudsShapes[utils.getRandomInt(0, cloudsShapes.length)];
            var cloud = cloudUtils.createCloud(direction, settings.maxWidthHeight.width,
                settings.maxWidthHeight.height * 2 / 3, maxCloudSpeed, shape);
            clouds.push(cloud);
            animationLayer.layer.appendChild(cloud.element);
        }
    }

    createClouds();
    console.log('clouds far away');
}

module.exports = CloudsFarAway;
