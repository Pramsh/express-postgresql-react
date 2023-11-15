import { pool } from "../db.js"
import { resLog } from "../utils/common.js";
export const deleteTodo = async(req, res, next) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id
        ]);
        res.json(resLog(id));
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}
