'use strict';
var settings = require('./../settings/app.settings');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resize(rect1, rect2) {

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
    getAppSize: getAppSize
};
