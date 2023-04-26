// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('glass', { title: 'Search Results Glass' });
// });

// module.exports = router;

var express = require('express');
const glass_controlers= require('../controllers/glass');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET  */
router.get('/', glass_controlers.glass_view_all_Page );
/* GET detail glass page */
router.get('/detail',secured, glass_controlers.glass_view_one_Page);
/* GET create glass page */
router.get('/create', secured, glass_controlers.glass_create_Page);
/* GET update glass page */
router.get('/update', secured, glass_controlers.glass_update_Page);
/* GET delete glass page */
router.get('/delete', secured, glass_controlers.glass_delete_Page);
module.exports = router;
