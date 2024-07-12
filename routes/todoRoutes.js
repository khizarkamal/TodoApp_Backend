const express = require("express");
const todosController = require("../controllers/todoControllers");

const router = express.Router();

router.route("/").get(todosController.getTodos).post(todosController.createTodo);
router.route("/:id").patch(todosController.updateTodo).delete(todosController.deleteTodos);


module.exports = router;