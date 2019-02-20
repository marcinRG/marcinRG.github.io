'use strict';
var appSettings = require('./../settings/app.settings');

function AnimationLayer(settings) {
    var layer = null;
    var width = 0;
    var height = 0;

    function init(settings) {
        console.log('init()');
        width = settings.width || appSettings.maxWidthHeight.width;
        height = settings.height || appSettings.maxWidthHeight.height;
        layer = getLayer(settings);
        if (layer) {
            console.log(layer);
            console.log(width);
            console.log(height);
        }
    }

    function getLayer(settings) {
        if (settings && settings.selectorQuery) {
            return document.querySelector(settings.selectorQuery);
        }
    }

    function animate() {
        console.log('layer.animate()');
    }

    init(settings);
    return {
        animate: animate
    };
}

module.exports = AnimationLayer;
