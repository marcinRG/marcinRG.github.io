'use strict';

var Layer = require('./ui/animationLayer');

var selector = '.s1';
var layer = new Layer({
    selectorQuery: selector
});
layer.showVieBoxParams();

var leftBtn = document.querySelector('#left-btn');
var rightBtn = document.querySelector('#right-btn');
var zoomInBtn = document.querySelector('#zoom-in-btn');
var zoomOutBtn = document.querySelector('#zoom-out-btn');

leftBtn.addEventListener('click', function () {
    layer.moveLeft();
});
rightBtn.addEventListener('click', function () {
    layer.moveRight();
});
zoomInBtn.addEventListener('click', function () {
    layer.zoomIn();
});
zoomOutBtn.addEventListener('click', function () {
    layer.zoomOut();
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
