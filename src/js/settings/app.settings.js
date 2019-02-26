'use strict';

var cloudsShapesSelector = '.resources .clouds-resources .cloud';
var appSelector = '.display';
var cloudsLayersSelectors = [
    '.display .canvas.clouds.layer-1',
    '.display .canvas.clouds.layer-2',
    '.display .canvas.clouds.layer-3'
];
var starsAndSunLayerSelector = '.display .canvas.clouds.sky';
var maxWidthHeight = {
    width: 2600,
    height: 1000
};

module.exports = {
    appSelector: appSelector,
    cloudsShapesSelector: cloudsShapesSelector,
    cloudsLayersSelectors: cloudsLayersSelectors,
    starsAndSunLayerSelector: starsAndSunLayerSelector,
    maxWidthHeight: maxWidthHeight
};
