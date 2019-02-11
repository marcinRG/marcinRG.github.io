'use strict';

var Clouds = require('./model/clouds');
var Stars = require('./model/stars');

var clouds = new Clouds();
clouds.run();
var stars = new Stars();
stars.run();

function animate() {
    clouds.animate();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

var background = document.querySelector('.display');
var btnRise = document.querySelector('#rise-btn');
btnRise.addEventListener('click', function () {
   background.className = 'display sunrise';
   //background.classList.add('sunrise');
});
var btnDay = document.querySelector('#noon-btn');
btnDay.addEventListener('click', function () {
    background.className = 'display';
});
var btnNight = document.querySelector('#night-btn');
btnNight.addEventListener('click', function () {
    console.log('night');
    background.className = 'display night';
});
var btnSunset = document.querySelector('#set-btn');
btnSunset.addEventListener('click', function () {
    background.className = 'display sunset';
});
