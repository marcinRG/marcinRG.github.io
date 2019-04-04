'use strict';
var appSettings = require('../settings/app.settings');
var utils = require('../utils/utils');

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
    var zoomDelta = 1;
    var minHorizontal = 20;
    var maxHorizontal = 80;
    var horizontalDelta = 1;
    var viewBoxWidthHeight;

    function init(settings) {
        setValues(settings);
        layer = getLayer(settings);
        if (layer) {
            viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect(), zoom);
            setPosition();
        }
    }

    function setValues(settings) {
        width = settings.width || appSettings.maxWidthHeight.width;
        height = settings.height || appSettings.maxWidthHeight.height;
        posXPercentage = settings.posXPercentage || appSettings.layerDefaultSettings.posXPercentage;
        posYPercentage = settings.posYPercentage || appSettings.layerDefaultSettings.posYPercentage;
        zoom = settings.zoom || appSettings.layerDefaultSettings.zoom;
        minZoom = settings.minZoom || appSettings.layerDefaultSettings.minZoom;
        maxZoom = settings.maxZoom || appSettings.layerDefaultSettings.maxZoom;
        zoomDelta = settings.zoomDelta || appSettings.layerDefaultSettings.zoomDelta;
        minHorizontal = settings.minHorizontal || appSettings.layerDefaultSettings.minHorizontal;
        maxHorizontal = settings.maxHorizontal || appSettings.layerDefaultSettings.maxHorizontal;
        horizontalDelta = settings.horizontalDelta || appSettings.layerDefaultSettings.horizontalDelta;
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
        var move = utils.getValueOrDefault(value, zoomDelta);
        if (isMovePossible(move, zoom, minZoom, maxZoom, directions.increase)) {
            zoom = zoom + move;
            doZoom(zoom);
        } else {
            hide();
        }
    }

    function zoomOut(value) {
        var move = utils.getValueOrDefault(value, zoomDelta);
        if (isMovePossible(move, zoom, minZoom, maxZoom, directions.decrease)) {
            zoom = zoom - move;
            doZoom(zoom);
        }
    }

    function doZoom(zoom) {
        show();
        viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), getRect(), zoom);
        setPosition();
    }

    function setPosition() {
        var positionX = getPosition(posXPercentage, viewBoxWidthHeight.maxX);
        var positionY = getPosition(posYPercentage, viewBoxWidthHeight.maxY);
        setViewBox(layer, viewBoxWidthHeight, positionX, positionY);
    }

    function moveLeft(value) {
        var move = utils.getValueOrDefault(value, horizontalDelta);
        if (isMovePossible(move, posXPercentage, minHorizontal, maxHorizontal, directions.decrease)) {
            posXPercentage = posXPercentage - move;
            setPosition();
        }
    }

    function moveRight(value) {
        var move = utils.getValueOrDefault(value, horizontalDelta);
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

    function toggleVisibility() {
        toggleLayerVisibility(layer);
    }

    function hide() {
        changeVisibility(layer, true);
    }

    function show() {
        changeVisibility(layer, false);
    }

    init(settings);
    return {
        getRect: getRect,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        moveLeft: moveLeft,
        moveRight: moveRight,
        toggleVisibility: toggleVisibility
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

function changeVisibility(layer, visible) {
    if (layer) {
        if (visible) {
            layer.style.visibility = 'hidden';
        } else {
            layer.style.visibility = 'visible';
        }
    }
}

function toggleLayerVisibility(layer) {
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
