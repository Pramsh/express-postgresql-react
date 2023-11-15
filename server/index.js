import express from "express";
import cors from "cors";
import { getTodo } from "./middlewares/getTodo.js";
import { todoById } from "./middlewares/getTodoById.js";
import { addTodo } from "./middlewares/addTodo.js";
import { updateTodo } from "./middlewares/updateTodo.js";
import { deleteTodo } from "./middlewares/deleteTodo.js";
import { getCache } from "./middlewares/routeCache.js";
const app = express();
//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

// create a todo
app.post("/todos", addTodo)

// get all todo
app.get("/todos", getCache, getTodo)

// get a todo
app.get("/todos/:id", todoById)

// update a todo
app.put("/todos/:id", updateTodo)

// //delete a todo
app.delete("/todos/:id", deleteTodo)


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
