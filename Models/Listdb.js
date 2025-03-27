const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    entry:{type:String},
    date:{type:Date, default: Date.now}

});

module.exports = mongoose.model('checklists', ListSchema);