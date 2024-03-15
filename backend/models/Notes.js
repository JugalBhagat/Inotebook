const mongoose = require('mongoose')

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        default:"Unknown"
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports=mongoose.model('notes',NotesSchema);