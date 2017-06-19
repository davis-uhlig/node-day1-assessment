const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum')
 , output = loremIpsum();


app.get('/lorem/:paragraphs', function(req, res){

  res.send(loremIpsum({
    count: req.params.paragraphs
    , units: 'paragraphs'
    , format: 'html'
  }));


});


app.listen(3000, function(){

});
