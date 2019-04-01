'use strict';
var appSettings = require('./../settings/app.settings');
var utils = require('./../utils/utils');

var directions = {
    increase: 'increase',
    decrease: 'decrease'
};

function AnimationLayer(settings) {
    var layer = null;
    var width = 0;
    var height = 0;
    var posXPercentage = 50;
    var posYPercentage = 50;
    var zoom = 100;
    var minZoom = 100;
    var maxZoom = 250;
    var minHorizontal = 0;
    var maxHorizontal = 100;
    var viewBoxWidthHeight;

    function init(settings) {
        console.log(settings);
        width = settings.width || appSettings.maxWidthHeight.width;
        height = settings.height || appSettings.maxWidthHeight.height;
        layer = getLayer(settings);
        if (layer) {
            viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect(), zoom);
            setPosition();
        }
    }

    function setViewBox(element, viewBoxWidthHeight, posX, posY) {
        if (utils.checkViewBox(viewBoxWidthHeight)) {
            element.setAttribute('viewBox', posX + ' ' + posY + ' ' +
                viewBoxWidthHeight.width + ' ' + viewBoxWidthHeight.height);
        } else {
            console.log('checkBox params error');
        }
    }

    function zoomIn(value) {
        var move = utils.getValueOrDefault(value, 1);
        if (isMovePossible(move, zoom, minZoom, maxZoom, directions.increase)) {
            zoom = zoom + move;
            viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect(), zoom);
            setPosition();
        }
    }

    function zoomOut(value) {
        var move = utils.getValueOrDefault(value, 1);
        if (isMovePossible(move, zoom, minZoom, maxZoom, directions.decrease)) {
            zoom = zoom - move;
            viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect(), zoom);
            setPosition();
        }
    }

    function setPosition() {
        var positionX = getPosition(posXPercentage, viewBoxWidthHeight.maxX);
        var positionY = getPosition(posYPercentage, viewBoxWidthHeight.maxY);
        setViewBox(layer, viewBoxWidthHeight, positionX, positionY);
    }

    function moveLeft(value) {
        var move = utils.getValueOrDefault(value, 1);
        if (isMovePossible(move, posXPercentage, minHorizontal, maxHorizontal, directions.decrease)) {
            console.log('moveLeft, value:' + move);
            posXPercentage = posXPercentage - move;
            setPosition();
        }
    }

    function moveRight(value) {
        var move = utils.getValueOrDefault(value, 1);
        if (isMovePossible(move, posXPercentage, minHorizontal, maxHorizontal, directions.increase)) {
            posXPercentage = posXPercentage + move;
            setPosition();
        }
    }

    function getRect() {
        return {
            width: width,
            height: height
        };
    }

    function toggle() {
        toggleVisibility(layer);
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
        toggle: toggle,
        showVieBoxParams: function () {
            console.log(viewBoxWidthHeight);
        }
    };
}

function isMovePossible(move, position, minValue, maxValue, direction) {
    switch (direction) {
        case directions.increase: {
            if (position + move <= maxValue) {
                return true;
            }
            break;
        }
        case directions.decrease: {
            if (position - move >= minValue) {
                return true;
            }
            break;
        }
    }
}

function toggleVisibility(layer) {
    if (layer) {
        var visibilityProp = window.getComputedStyle(layer).getPropertyValue('visibility');
        if (visibilityProp && visibilityProp === 'hidden') {
            layer.style.visibility = 'visible';
        } else {
            layer.style.visibility = 'hidden';
        }
    }
}

function getPosition(percentage, maxValue) {
    return maxValue * (percentage / 100);
}

function getLayer(settings) {
    if (settings && settings.selectorQuery) {
        return document.querySelector(settings.selectorQuery);
    }
}

module.exports = AnimationLayer;
