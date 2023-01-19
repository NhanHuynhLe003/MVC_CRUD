const mongoose = require('mongoose');
const {Schema} = mongoose;

const course = new Schema({
    title:{type: String, minLength: 1 },
    description:{type: String, maxLength: 255},
    image:{type: String},
    slug:{type: String},
    videoid:{type: String},
    publishedAt: {type: Date, default:Date.now},
    updatedAt: {type: Date, default:Date.now}
});

//export file
module.exports = mongoose.model('course',course); //modelname tu dong format sang so nhieu, chu thuong

