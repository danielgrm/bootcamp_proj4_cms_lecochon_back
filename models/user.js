const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha :{
        type: String,
        required: true,
        //select: false
    },
    data: {
      type: Date,
      default: Date.now
    }
}, { autoCreate : true })

module.exports = mongoose.model('user', UserSchema);
