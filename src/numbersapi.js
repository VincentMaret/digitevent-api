import rp from 'request-promise-native';

// build, launch and wait requests
async function getDatesInfo(dates) {
  // build requests
  dates = dates.split(',');
  dates = dates.map(x => x.trim());

  // wait for all promises being resolved
  const values = await Promise.all(
    dates.map(date => {
      return getSingleDateInfo(date);
    })
  );

  return values;
}

// Make single request on numbersapi
function getSingleDateInfo(date) {
  const res = rp({
    uri: `http://numbersapi.com/${date}/date`
  }).then(body => {
    return { req: date, res: body }
  })
    .catch(err => {
      return { req: date, res: "err" };
    });

  return res;
}

export { getDatesInfo };
