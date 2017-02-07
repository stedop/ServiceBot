'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

class config {

    constructor(configFile) {
        console.log(configFile);
        _fs2.default.access(configFile, 'fwr', function (err) {
            throw new Error('Config file not found or is not readable', err);
        });
        this.config = new _dotenv2.default.config({
            path: configFile
        });
    }

    hasMany() {
        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var self = this;
        (0, _each3.default)(keys, function (key) {
            if (self.has(key) === false) {
                return false;
            }
        });
    }

    has() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var value = '';
        try {
            value = this.get(key);
        } catch (error) {
            if (error instanceof TypeError) {
                return false;
            }
            throw error;
        }

        return value;
    }

    get() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        return process.config[key];
    }

    set() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var value = arguments[1];

        process.config[key] = value;
    }
}

exports.default = config;
//# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map