import { pool } from "../db.js"
export const updateTodo = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]
        );

        res.json({message:"ok "});
        next()
    } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
    }
}
