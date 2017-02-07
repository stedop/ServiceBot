'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults2 = require('lodash/defaults');

var _defaults3 = _interopRequireDefault(_defaults2);

var _snoowrap = require('snoowrap');

var _snoowrap2 = _interopRequireDefault(_snoowrap);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

class bot {

    /**
     * Build the bot
     *
     * @param configFile
     * @param services
     * @param events
     */
    constructor() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            configFile = _ref.configFile,
            services = _ref.services,
            events = _ref.events;

        (0, _defaults3.default)(this, {
            configFile,
            services,
            events
        }, {
            configFile: _path2.default.resolve(__dirname) + '/.env',
            services: {},
            events: {}
        });

        try {
            this.config = {};
            this.__initConfig();
            this.__initSnooWrap();
        } catch (error) {
            throw error;
        }
    }

    __initConfig() {
        this.__config = new _config2.default(this.configFile);
    }

    __initSnooWrap() {
        if (this.__config.hasMany(['userAgent', 'clientId', 'clientSecret', 'refreshToken'])) {
            this.reddit = new _snoowrap2.default({
                userAgent: this.__config.get('userAgent'),
                clientId: this.__config.get('clientId'),
                clientSecret: this.__config.get('clientSecret'),
                refreshToken: this.__config.get('refreshToken')
            });
        } else {
            throw new Error('Missing reddit configuration');
        }
    }
}

exports.default = bot;
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map
//# sourceMappingURL=servicebot.js.map