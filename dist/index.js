'use strict';

var _servicebot = require('./servicebot');

var _servicebot2 = _interopRequireDefault(_servicebot);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

try {
    var configFile = _path2.default.resolve(__dirname) + '/../.env';
    var newBot = new _servicebot2.default({ configFile });

    newBot.reddit.getSubreddit('dopscsstesting');

    console.log(_servicebot2.default);
} catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map