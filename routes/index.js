var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search');
});

router.get('/results', (req, res, next) => {
  var search = req.query.search;
  var url = `http://www.omdbapi.com/?apikey=${process.env.MOVIE_API_KEY}&s=` + search;
  request(url, (error, response, body) => {



    var data = JSON.parse(body)
    data = data.Response == 'False' ? {Search: [{Title:'No Movies', Year:'', imdbID:'',Poster:'N/A'}]} : data
    console.log(data)
    res.render('results', {data});
  });
});

module.exports = router;
