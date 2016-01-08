var express = require('express');
var router = express.Router();
require('isomorphic-fetch');

router.get('/', function(req,res) {
   fetch('http://www.pm25.in/api/querys.json?'+'token=5j1znBVAsnSf5xQyNQyq')
   .then(function(response) {
      return response.json();
   })
   .then(function(result) {
      console.log(result);
      res.end(JSON.stringify(result));
   })
   .catch(function(err) {
      console.log('err: ', err);
   })
});


module.exports = router;