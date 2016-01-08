var express = require('express');
var router = express.Router();
require('isomorphic-fetch');

router.get('/', function(req,res) {
    fetch('http://www.pm25.in/api/querys/apis_by_station.json?'+'token=5j1znBVAsnSf5xQyNQyq'+'&station_code'+req.query.station_code)
    .then(function(response) {
      return response.text();
    })
    .then(function(result) {
       //res.send(JSON.stringify(result));
       // res.send(result);
        res.end('<html><hea><mata charset="UTF-8"/></hea><body>数据占时无法提供</body></html>')
    })
    .catch(function(err) {
       console.log('err: ' + err);
    });
});

module.exports = router;
