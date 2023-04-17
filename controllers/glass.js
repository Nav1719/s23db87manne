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
// for a specific Costume.
exports.glass_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Glass.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Costume delete on DELETE.
exports.glass_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Glass.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Glass update form on PUT.
exports.glass_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Glass.findById( req.params.id)
 // Do updates of properties
 if(req.body.glass_name)
 toUpdate.glass_name = req.body.glass_name;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 if(req.body.resistance) toUpdate.resistance = req.body.resistance;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};