const mongoose = require("mongoose")
            // image,
            // productname,
            // time,
            // quantity,
            // amount
const productSchema = new mongoose.Schema({
    image : {type : String , required : true},
    productname : {type : String , required : true},
    time : {type : String , required : true},
    quantity : {type : String , required : true},
    amount : {type : String , required : true},
    isCart : {type : Boolean , default : false},
    category : {type : String , required : true}
})

const Product = mongoose.model("Product" , productSchema);

module.exports = Product;