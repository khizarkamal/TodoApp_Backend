const TodoModel = require("../models/todoModel");

exports.getTodos = async (req,res) => {
   try{
    const queryParams = req.query;
    let query = TodoModel.find(queryParams);
    const todos = await query;
    res.json({
        status:"success",
        message:"List of all todos",
        data:{
            todos
        }
    })
   }
   catch(error){
    res.json({
        status:"failed",
        message:"Something went wrong while creating the todo"
    })
   }
}

exports.createTodo = async (req,res) => {
    try{
    const createdTodo = await TodoModel.create(req.body);
    res.json({
        status:201,
        message:"Todo created successfully",
        data: {
          todo:createdTodo  
        }
    })
    }
    catch(error){
        console.log(error);
        res.json({
            status:400,
            message:"Something went wrong while creating the todo"
        })
    }
}

exports.updateTodo = async (req,res) =>{
    try{
        const id = req.params.id;
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body , {
            new:true,
            runValidators:true
        });

        if(!updatedTodo){
            return res.json({
                status:200,
                message:"No todo found for the given id",
            })
        }

        return res.json({
            status:200,
            message:"Successfully updated todo",
            data:{
                todo: updatedTodo
            }
        })
    }
    catch(error){
        console.log("Error", error);
        res.json({
            status:400,
            message:"Something went wrong while updating the todo item"
        })
    }
}

exports.deleteTodos = async (req,res) =>{
    try{
        const id = req.params.id;
        const deletedTodo = await TodoModel.findByIdAndDelete(id);

        if(!deletedTodo){
            return res.json({
                status:200,
                message:"No todo found for the given id",
            })
        }
        return res.json({
            status:200,
            message:"Successfully deleted todo",
        })
    }
    catch(error){
        console.log("Error", error);
        res.json({
            status:400,
            message:"Something went wrong while deleting the todo item"
        })
    }
} 