var Glass = require('../models/glass');
// List of all Costumes
exports.glass_list = async function(req, res) {
    try{
    theCostumes = await Glass.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   //Views and Handle a how all view
   exports.glass_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Glass.find();
    res.render('glass', { title: 'Glass Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Glass.
exports.glass_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Glass detail: ' + req.params.id);
};
// Handle Glass create on POST.
exports.glass_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Glass();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"glass_name":"fiber", "quantity":57, "resistance":"Themalr"}
    document.glass_name = req.body.glass_name;
    document.quantity = req.body.quantity;
    document.resistance = req.body.resistance;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Glass delete form on DELETE.
exports.glass_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Glass delete DELETE ' + req.params.id);
};
// Handle Glass update form on PUT.
exports.glass_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Glass update PUT' + req.params.id);
};