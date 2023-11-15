import { pool } from "../db.js"
export const getTodo = async(req, res, next) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
        next()
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
