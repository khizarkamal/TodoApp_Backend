const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todoText: {
        type:String,
        required: [true,"Todo is required"],
        min: [8,"Todo must be more than 8 characters"],
        max:[250,"Todo cannot extend 250 characters"],
        unique:true
    },
    active:{
        type: Boolean,
        default:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;