'use strict';

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

var utils = require('./utils/utils');
var Layer = require('./ui/animationLayer');

var selector = '.s1';
var viewBoxWidthHeight;
var layer = new Layer({
    selectorQuery: selector
});

var canvas = document.querySelector(selector);

// window.addEventListener('resize', function () {
//     console.log('----------------------------------------------------');
//     console.log('----------------------------------------------------');
//     //console.log(utils.getAppSize());
//     //console.log(layer.getRect());
//     console.log(utils.resizeToFit(utils.getAppSize(), layer.getRect()));
//     viewBoxWidthHeight = utils.resizeToFit(utils.getAppSize(), layer.getRect());
//     if (utils.checkViewBox(viewBoxWidthHeight)) {
//         canvas.setAttributeNS('http://www.w3.org/2000/svg',
//             'viewBox', 0 + ' ' + 0 + ' ' +
//             viewBoxWidthHeight.width + ' ' + viewBoxWidthHeight.height);
//     } else {
//         canvas.removeAttribute('viewBox');
//     }
// });

console.log('app size');
console.log(utils.getAppSize());
console.log('layer size');
console.log(layer.getRect());
console.log('new values');
console.log(utils.getViewBoxParams(utils.getAppSize(), layer.getRect()));
viewBoxWidthHeight = utils.getViewBoxParams(utils.getAppSize(), layer.getRect());
if (utils.checkViewBox(viewBoxWidthHeight)) {
    canvas.setAttribute('viewBox', viewBoxWidthHeight.minX + ' ' + viewBoxWidthHeight.minY + ' ' +
        viewBoxWidthHeight.width + ' ' + viewBoxWidthHeight.height);
} else {
    console.log('checbox params error');
}

// var viewBoxWidthHeight = utils.resizeToFit(utils.getAppSize(), layer.getRect());
// canvas.setAttributeNS('http://www.w3.org/2000/svg',
//     'viewBox', '0 0 ' + viewBoxWidthHeight.width + ' ' + viewBoxWidthHeight.height);

// function animate() {
//     //layer.animate();
//     window.requestAnimationFrame(animate);
// }
// window.requestAnimationFrame(animate);
