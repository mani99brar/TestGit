const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
        name:String,
        address:String,
        number:String,
        mail:String,
        total:Number,
        title:Array,
        price:Array,
        date:String,
        original:Array,
        currency:String,
        status:Number,
        prints:Array

});


module.exports = mongoose.model('orders',orderSchema);