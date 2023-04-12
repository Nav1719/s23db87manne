// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('glass', { title: 'Search Results Glass' });
// });

// module.exports = router;

var express = require('express');
const costume_controlers= require('../controllers/glass');
var router = express.Router();
/* GET  */
router.get('/', costume_controlers.glass_view_all_Page );
module.exports = router;
