const mongoose = require('mongoose');

async function mainConnect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_project');
        console.log('connect success!');
    } catch (error) {
        console.log('connect error!');
    }
}

module.exports = {mainConnect};