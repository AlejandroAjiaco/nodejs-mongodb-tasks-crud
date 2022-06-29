
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model 


const taskSchema = new Schema({
    title:{
        type:  String,
        required: true,
        unique:true,
        trim:true,
    },
    description:{
        type:  String,
        required: true,
    }, 
    celular:{
        type:  String,
        required: true,
    }, 
    done:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
    versionKey:false,
})

export default model('Task',taskSchema);
