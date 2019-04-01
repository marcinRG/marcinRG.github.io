'use strict';

var Layer = require('./ui/animationLayer');

var selector1 = '.s1';
var selector2 = '.s2';
var layer = new Layer({
    selectorQuery: selector1,
    minHorizontal: 25,
    maxHorizontal: 75,
    maxZoom: 200,
    minZoom: 100,
    zoom: 100,
    zoomDelta: 2,
    horizontalDelta: 1.5
});

var layer2 = new Layer({
    selectorQuery: selector2,
    minHorizontal: 40,
    maxHorizontal: 60,
    maxZoom: 150,
    minZoom: 100,
    zoom: 105
});

layer.showVieBoxParams();

var leftBtn = document.querySelector('#left-btn');
var rightBtn = document.querySelector('#right-btn');
var zoomInBtn = document.querySelector('#zoom-in-btn');
var zoomOutBtn = document.querySelector('#zoom-out-btn');
var visibilityBtn = document.querySelector('#visibility-btn');

leftBtn.addEventListener('click', function () {
    layer.moveLeft();
    layer2.moveLeft();
});
rightBtn.addEventListener('click', function () {
    layer.moveRight();
    layer2.moveRight();
});
zoomInBtn.addEventListener('click', function () {
    layer.zoomIn();
    layer2.zoomIn();
});
zoomOutBtn.addEventListener('click', function () {
    layer.zoomOut();
    layer2.zoomOut();
});

visibilityBtn.addEventListener('click', function () {
    layer.toggle();
    layer2.toggle();
});

// var Clouds = require('./model/clouds');
// var Stars = require('./model/stars');
//
// var clouds = new Clouds();
// clouds.run();
// var stars = new Stars();
// stars.run();
//

//
// var background = document.querySelector('.display');
// var btnRise = document.querySelector('#rise-btn');
// btnRise.addEventListener('click', function () {
//    background.className = 'display sunrise';
//    //background.classList.add('sunrise');
// });
// var btnDay = document.querySelector('#noon-btn');
// btnDay.addEventListener('click', function () {
//     background.className = 'display';
// });
// var btnNight = document.querySelector('#night-btn');
// btnNight.addEventListener('click', function () {
//     console.log('night');
//     background.className = 'display night';
// });
// var btnSunset = document.querySelector('#set-btn');
// btnSunset.addEventListener('click', function () {
//     background.className = 'display sunset';
// });
