'use strict';
var settings = require('./../settings/app.settings');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkViewBox(rect) {
    return (rect && rect.width && rect.height);
}

function getViewBoxParams(viewRect, objRect, zoom) {
    var viewRatio = 0;
    var scale = setScale(zoom, 100);
    if ((viewRect.width / viewRect.height) <= (objRect.width / objRect.height)) {
        viewRatio = scale * (objRect.height / viewRect.height);
    } else {
        viewRatio = scale * (objRect.width / viewRect.width);
    }
    var maxX = Math.round(objRect.width - viewRect.width * viewRatio);
    var maxY = Math.round(objRect.height - viewRect.height * viewRatio);

    return {
        height: Math.round(viewRect.height * viewRatio),
        width: Math.round(viewRect.width * viewRatio),
        maxX: maxX,
        maxY: maxY
    };
}

function getAppSize() {
    var elem = document.querySelector(settings.appSelector);
    var rect = elem.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height
    };
}

function setScale(zoom, defaultZoom) {
    var objZoom = getValueOrDefault(zoom, defaultZoom);
    if (objZoom >= 100) {
        return 100 / objZoom;
    }
    return 1;
}

function getValueOrDefault(value, defaultValue) {
    if (value) {
        return value;
    }
    return defaultValue;
}

module.exports = {
    getRandomInt: getRandomIntInclusive,
    getAppSize: getAppSize,
    getViewBoxParams: getViewBoxParams,
    checkViewBox: checkViewBox,
    getValueOrDefault: getValueOrDefault
};
