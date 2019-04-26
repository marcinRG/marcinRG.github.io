'use strict';

function KeyAndEventHandler(settings) {
    var keyPresses = [];
    var blockKeyPresses = false;
    var buttonSelected = null;

    function setKeyHandlers() {
        window.addEventListener('keydown', function (value) {
            switch (value.key) {
                case 'ArrowLeft': {
                    this.keyPresses['ArrowLeft'] = true;
                    break;
                }
                case 'ArrowRight': {
                    this.keyPresses['ArrowRight'] = true;
                    break;
                }
            }
        });

        window.addEventListener('keyup', function (value) {
            switch (value.key) {
                case 'ArrowLeft': {
                    this.keyPresses['ArrowLeft'] = false;
                    break;
                }
                case 'ArrowRight': {
                    this.keyPresses['ArrowRight'] = false;
                    break;
                }
            }
        });
    }

    function setButtonHandlers(settings) {
        console.log(settings);
    }

    function init(settings) {
        setButtonHandlers(settings);
        setKeyHandlers();
    }

    init(settings);
    return {
        keyPresses: keyPresses,
        blockKeyPresses: blockKeyPresses,
        buttonSelected: buttonSelected
    };
}

function createButtonHandler(selector, msg, buttonVariable) {
    var element = document.querySelectorAll(selector);
    if (element) {
        element.addEventListener('click', function () {
            buttonVariable = msg;
        });
    }
}

module.exports = KeyAndEventHandler;
