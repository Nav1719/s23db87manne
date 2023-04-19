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
/* GET detail costume page */
router.get('/detail', costume_controlers.glass_view_one_Page);
/* GET create costume page */
router.get('/create', costume_controlers.glass_create_Page);
/* GET create update page */
router.get('/update', costume_controlers.glass_update_Page);
/* GET delete costume page */
router.get('/delete', costume_controlers.glass_delete_Page);
module.exports = router;
