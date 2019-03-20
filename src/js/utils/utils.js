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

function getViewBoxParams(viewRect, objRect) {
    var X = 0;
    var Y = 0;
    var maxX = 0;
    var maxY = 0;
    var viewRatio = 0;
    if ((viewRect.width / viewRect.height) <= (objRect.width / objRect.height)) {
        viewRatio = objRect.height / viewRect.height;
        maxX = Math.round(objRect.width - viewRect.width * viewRatio);
        X = Math.round((objRect.width - viewRect.width * viewRatio) / 2);
    } else {
        viewRatio = objRect.width / viewRect.width;
        maxY = Math.round(objRect.height - viewRect.height * viewRatio);
        Y = Math.round((objRect.height - viewRect.height * viewRatio) / 2);
    }
    return {
        height: Math.round(viewRect.height * viewRatio),
        width: Math.round(viewRect.width * viewRatio),
        X: X,
        Y: Y,
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

module.exports = {
    getRandomInt: getRandomIntInclusive,
    getAppSize: getAppSize,
    getViewBoxParams: getViewBoxParams,
    checkViewBox: checkViewBox
};
