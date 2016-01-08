var express = require('express');
require('isomorphic-fetch');

var router = express.Router();

router.get('/', function(req, res){
   fetch('http://www.pm25.in/api/querys/pm2_5.json?'+'token=5j1znBVAsnSf5xQyNQyq'+'&city='+req.query.city+'&avg='+req.query.avg+'&stations='+req.query.stations)
   .then(function (response) {
      return response.json()
   })
   .then(function(result) {
      res.send(JSON.stringify(result));
   })
   .catch(function (err) {
      console.log('err: ' + err);
   })
});

module.exports = router;
