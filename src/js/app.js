'use strict';

var Layer = require('./ui/animationLayer');
var CloudsFarAway = require('./model/cloudsFarAway');
var SunAndStars = require('./model/sunAndStars');

var selector1 = '.s1';
var selector2 = '.s2';
var layer = new Layer({
    selectorQuery: selector1,
    minHorizontal: 0,
    maxHorizontal: 100,
    horizontalDelta: 2
});

var layer2 = new Layer({
    selectorQuery: selector2
});

var cloudsFarAwayLayer = new CloudsFarAway({
    selectorQuery: '.clouds.far-away'
});

var sunAndStarsLayer = new SunAndStars({
    selectorQuery: '.sun-and-stars'
});

function animate() {
    cloudsFarAwayLayer.animate();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

var leftBtn = document.querySelector('#left-btn');
var rightBtn = document.querySelector('#right-btn');
var zoomInBtn = document.querySelector('#zoom-in-btn');
var zoomOutBtn = document.querySelector('#zoom-out-btn');
var visibilityBtn = document.querySelector('#visibility-btn');

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

visibilityBtn.addEventListener('click', function () {
    layer.toggleVisibility();
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
