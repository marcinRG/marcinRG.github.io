'use strict';
var settings = require('./../settings/app.settings');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkViewBox(rect) {
    return (rect || rect.width || rect.height || rect.minX || rect.minY);
}

function resizeToFit(viewRect, objRect) {
    var height;
    var width;
    var minX = 0;
    var minY = 0;
    // var factor = objRect.width / objRect.height;
    // console.log('obj factor');
    // console.log(factor);
    var factorView = objRect.height / viewRect.height;
    // console.log('view factor');
    // console.log(factorView);
    //if (factorView <= factor) {
    height = Math.round(viewRect.height * factorView);
    width = Math.round(viewRect.width * factorView);
    //}
    return {
        height: height,
        width: width,
        minY: minY,
        minX: minX
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
    resizeToFit: resizeToFit,
    checkViewBox: checkViewBox
};
