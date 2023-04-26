const mongoose = require("mongoose")
const glassSchema = mongoose.Schema({
glass_name: {
    type: String,
    required:[true,"Glass Name is required"]
},
quantity: {
    type:Number,
    required:true,
    min:[1,"quantity is greater than one"],
    max:[100,"quantity must be less than 100 "],
    validate:{
        validator:function(value){
            return "Quantity must be between 1 to 100 and no negatives values "
        },
        message: props => `${props.value} is not within the limit`
    }

},
resistance: {
    type: String,
    required:true
}
})
module.exports = mongoose.model("Glass",glassSchema)
