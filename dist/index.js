'use strict';

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3000); //----------------------------------------------
//------------SET ROUTS-------------------------
//----------------------------------------------

app.get('/', function (req, res, next) {
  res.send('hello worldddssd');
}); //----------------------------------------------
//------------Launch Server---------------------
//----------------------------------------------

app.listen(app.get('port'), function () {
  console.log('app listening on port ' + app.get('port'));
});