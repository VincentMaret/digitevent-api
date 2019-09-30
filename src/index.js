'use strict';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);

//----------------------------------------------
//------------SET ROUTS-------------------------
//----------------------------------------------
app.get('/', function (req, res, next) {
  res.send('hello world')
});

//----------------------------------------------
//------------Launch Server---------------------
//----------------------------------------------
app.listen(app.get('port'), function () {
  console.log('app listening on port ' + app.get('port'));
});