var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */

/*
Ultimo job ejecutado por el spider
https://doc.scrapinghub.com/api/jobq.html
https://storage.scrapinghub.com/jobq/145711/list?apikey=4ef60efbba564ca0b08fdea5a0501761&format=json&spider=horarios&state=finished&count=1

Item del job xxx
https://storage.scrapinghub.com/items/145711/xxx?apikey=4ef60efbba564ca0b08fdea5a0501761&format=json
*/

router.get('/:spider', function(req, res, next) {

  var project = "145711"
  var spider = req.params.spider
  var apiKey = "4ef60efbba564ca0b08fdea5a0501761"
  
  var getLastJob = function(){
    var url = "https://storage.scrapinghub.com/jobq/"+project+"/list?apikey="+apiKey+"&format=json&spider="+spider+"&state=finished&count=1"
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var data = JSON.parse(body)
            if(data[0]){
                getLastItems(data[0].key)
            }
            
          
        }
    });
  }

  var getLastItems = function(key){
    var url = "https://storage.scrapinghub.com/items/"+key+"?apikey="+apiKey+"&format=json"
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var data = JSON.parse(body)
            res.json(data)
        }
    });    
 }

  getLastJob();
  
  
 
});

module.exports = router;
