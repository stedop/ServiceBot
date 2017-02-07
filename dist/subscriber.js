'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Publish/Subscribe Pattern
 */
class Subscribers {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') {
      context = handler;
    }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }

  publish(event, args) {
    this.handlers.forEach(function (topic) {
      if (topic.event === event) {
        topic.handler(args);
      }
    });
  }
}

exports.default = Subscribers;
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map
//# sourceMappingURL=subscriber.js.map