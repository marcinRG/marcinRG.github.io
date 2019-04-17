'use strict';
var AnimationLayer = require('./../ui/animationLayer');
var shapeUtils = require('./../utils/shapes.utils');
var appSettings = require('./../settings/app.settings');

function SunAndStars(settings) {
    var numberOfStars = 350;
    var maxRadius = 4;
    var stars = [];
    var animationLayer = new AnimationLayer(settings);

    function createStars() {
        for (var i = 1; i <= numberOfStars; i++) {
            var star = shapeUtils.createStar(appSettings.maxWidthHeight.width,
                appSettings.maxWidthHeight.height, maxRadius);
            stars.push(star);
            animationLayer.layer.appendChild(star);
        }
    }

    function animate() {
        console.log('animate');
    }

    createStars();

    return {
        animate: animate
    };
}

module.exports = SunAndStars;
