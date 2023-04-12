const mongoose = require("mongoose")
const glassSchema = mongoose.Schema({
glass_name: String,
quantity: Number,
resistance: String
})
module.exports = mongoose.model("Glass",glassSchema)
