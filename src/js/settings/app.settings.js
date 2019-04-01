'use strict';

var cloudsShapesSelector = '.resources .clouds-resources .cloud';
var appSelector = '.app';
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

var layerDefaultSettings = {
    posXPercentage: 50,
    posYPercentage: 50,
    zoom: 100,
    minZoom: 100,
    maxZoom: 250,
    zoomDelta: 1,
    minHorizontal: 20,
    maxHorizontal: 80,
    horizontalDelta: 1
};

module.exports = {
    appSelector: appSelector,
    cloudsShapesSelector: cloudsShapesSelector,
    cloudsLayersSelectors: cloudsLayersSelectors,
    starsAndSunLayerSelector: starsAndSunLayerSelector,
    maxWidthHeight: maxWidthHeight,
    layerDefaultSettings: layerDefaultSettings
};
