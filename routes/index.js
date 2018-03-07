var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FoodFinder' });
});

router.get('/results_page', function(req, res, next) {
  res.render('results_page', { title: 'FoodFinder' });
});

router.post('/search', function(req,res) {
  res.render('results_page', {title: 'FoodFinder'});
});

module.exports = router;

