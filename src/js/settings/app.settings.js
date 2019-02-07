'use strict';

var cloudsShapesSelector = '.resources .clouds-resources .cloud';
var cloudsLayersSelectors = [
    '.display .canvas.clouds.sky',
    '.display .canvas.clouds.layer-1',
    '.display .canvas.clouds.layer-2',
    '.display .canvas.clouds.layer-3',
    '.display .canvas.clouds.layer-4'
];
var maxWidthHeight = {
    width: 1920,
    height: 1080
};

module.exports = {
    cloudsShapesSelector: cloudsShapesSelector,
    cloudsLayersSelectors: cloudsLayersSelectors,
    maxWidthHeight: maxWidthHeight
};
