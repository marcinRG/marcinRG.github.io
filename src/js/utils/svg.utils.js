'use strict';

var svgNameSpace = 'http://www.w3.org/2000/svg';

function createPath(properties) {
    var elem = document.createElementNS(svgNameSpace, 'path');
    elem = setProperties(elem, properties);
    return elem;
}

function isPathAttribute(attrName) {
    switch (attrName) {
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

function setProperties(elem, properties) {
    if (elem && properties) {
        for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName) && isPathAttribute(propertyName)) {
                elem.setAttributeNS(null, propertyName, properties[propertyName]);
            }
        }
    }
    return elem;
}

module.exports = {
    nameSpace: svgNameSpace,
    createPath: createPath
};
