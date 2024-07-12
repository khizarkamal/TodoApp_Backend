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
        status:"success",
        message:"Todo created successfully",
        data: {
          todo:createdTodo  
        }
    })
    }
    catch(error){
        console.log(error);
        res.json({
            status:"failed",
            message:"Something went wrong while creating the todo"
        })
    }
}

exports.updateTodo = async () =>{
    console.log("Update Todo");
}

exports.deleteTodos = async () =>{

} 