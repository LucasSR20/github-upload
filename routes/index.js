var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next){
  res.send(req.body.test);
});

router.get('/', function(req, res, next) {
  
   res.render('index', { title: 'Express' });
});

module.exports = router;
