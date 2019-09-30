'use strict';
import express from 'express';
import cors from 'cors';
import { getDatesInfo } from './numbersapi';

const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);

//----------------------------------------------
//------------SET ROUTS-------------------------
//----------------------------------------------
app.get('/', async function (req, res) {
  const values = await getDatesInfo(req.query.dates);
  res.send({ result: values });
})

//----------------------------------------------
//------------Launch Server---------------------
//----------------------------------------------
app.listen(app.get('port'), function () {
  console.log('app listening on port ' + app.get('port'));
});