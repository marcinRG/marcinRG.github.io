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
    var minX = 0;
    var minY = 0;
    var viewRatio = 0;
    if ((viewRect.width / viewRect.height) <= (objRect.width / objRect.height)) {
        viewRatio = objRect.height / viewRect.height;
        minX = Math.round((objRect.width - viewRect.width * viewRatio) / 2);
    } else {
        viewRatio = objRect.width / viewRect.width;
        minY = Math.round((objRect.height - viewRect.height * viewRatio) / 2);
    }
    return {
        height: Math.round(viewRect.height * viewRatio),
        width: Math.round(viewRect.width * viewRatio),
        minX: minX,
        minY: minY
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
