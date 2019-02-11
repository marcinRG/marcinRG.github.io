'use strict';

var svgNameSpace = 'http://www.w3.org/2000/svg';

function createPath(properties) {
    var elem = document.createElementNS(svgNameSpace, 'path');
    elem = setProperties(elem, properties);
    elem = setClass(elem, properties);
    return elem;
}

function createCircle(properties) {
    var elem = document.createElementNS(svgNameSpace, 'circle');
    elem = setProperties(elem, properties);
    elem = setClass(elem, properties);
    return elem;
}

function isSVGAttribute(attrName) {
    switch (attrName) {
        case 'cx':
            return true;
        case 'cy':
            return true;
        case 'r':
            return true;
        case 'd':
            return true;
        case 'fill':
            return true;
        case 'stroke':
            return true;
        case 'stroke-width':
            return true;
        case 'fill-opacity':
            return true;
    }
    return false;
}

function setClass(element, settings) {
    if (settings.className && element) {
        element.classList.add(settings.className);
        return element;
    }
}

function setProperties(elem, properties) {
    if (elem && properties) {
        for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName) && isSVGAttribute(propertyName)) {
                elem.setAttributeNS(null, propertyName, properties[propertyName]);
            }
        }
    }
    return elem;
}

module.exports = {
    nameSpace: svgNameSpace,
    createPath: createPath,
    createCircle: createCircle
};
