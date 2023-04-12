var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/glass');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/glasses', costume_controller.glass_create_post);
// DELETE request to delete Costume.
router.delete('/glasses/:id', costume_controller.glass_delete);
// PUT request to update Costume.
router.put('/glasses/:id', costume_controller.glass_update_put);
// GET request for one Costume.
router.get('/glasses/:id', costume_controller.glass_detail);
// GET request for list of all Costume items.
router.get('/glasses', costume_controller.glass_list);
// Get all items data
// router.get('/', costume_controller.glass_view_all_Page);
module.exports = router;