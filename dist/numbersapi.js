"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatesInfo = getDatesInfo;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// build, launch and wait requests
function getDatesInfo(_x) {
  return _getDatesInfo.apply(this, arguments);
} // Make single request on numbersapi


function _getDatesInfo() {
  _getDatesInfo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(dates) {
    var values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // build requests
            dates = dates.split(',');
            dates = dates.map(function (x) {
              return x.trim();
            }); // wait for all promises being resolved

            _context.next = 4;
            return Promise.all(dates.map(function (date) {
              return getSingleDateInfo(date);
            }));

          case 4:
            values = _context.sent;
            return _context.abrupt("return", values);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getDatesInfo.apply(this, arguments);
}

function getSingleDateInfo(date) {
  var res = (0, _requestPromiseNative["default"])({
    uri: "http://numbersapi.com/".concat(date, "/date")
  }).then(function (body) {
    return {
      req: date,
      res: body
    };
  })["catch"](function (err) {
    return {
      req: date,
      res: "err"
    };
  });
  return res;
}