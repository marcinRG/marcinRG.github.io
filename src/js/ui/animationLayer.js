'use strict';
var appSettings = require('./../settings/app.settings');
var utils = require('./../utils/utils');

function AnimationLayer(settings) {
    var layer = null;
    var width = 0;
    var height = 0;
    var viewBoxWidthHeight;

    function init(settings) {
        width = settings.width || appSettings.maxWidthHeight.width;
        height = settings.height || appSettings.maxWidthHeight.height;
        layer = getLayer(settings);
        if (layer) {
            viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect());
            setViewBox(layer, viewBoxWidthHeight);
        }
    }

    function zoomIn(value) {
        console.log('zoom in, value:' + value);
    }

    function zoomOut(value) {
        console.log('zoom in, value:' + value);
    }

    function moveLeft(value) {
        if (value) {
            viewBoxWidthHeight.X = viewBoxWidthHeight.X - value;
        } else {
            viewBoxWidthHeight.X = viewBoxWidthHeight.X - 1;
        }
        setViewBox(layer, viewBoxWidthHeight);
        console.log('zoom in, value:' + value);
    }

    function moveRight(value) {
        if (value) {
            viewBoxWidthHeight.X = viewBoxWidthHeight.X + value;
        } else {
            viewBoxWidthHeight.X = viewBoxWidthHeight.X + 1;
        }
        setViewBox(layer, viewBoxWidthHeight);
        console.log('zoom in, value:' + value);
    }

    function getRect() {
        return {
            width: width,
            height: height
        };
    }

    function animate() {
        console.log('layer.animate()');
    }

    init(settings);
    return {
        getRect: getRect,
        animate: animate,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        moveLeft: moveLeft,
        moveRight: moveRight,
        showVieBoxParams: function () {
            console.log(viewBoxWidthHeight);
        }
    };
}

function getLayer(settings) {
    if (settings && settings.selectorQuery) {
        return document.querySelector(settings.selectorQuery);
    }
}

function setViewBox(element, viewBoxWidthHeight) {
    if (utils.checkViewBox(viewBoxWidthHeight)) {
        element.setAttribute('viewBox', viewBoxWidthHeight.X + ' ' + viewBoxWidthHeight.Y + ' ' +
            viewBoxWidthHeight.width + ' ' + viewBoxWidthHeight.height);
    } else {
        console.log('checkBox params error');
    }
}

module.exports = AnimationLayer;
