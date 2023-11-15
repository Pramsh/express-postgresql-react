import { pool } from "../db.js"
export const addTodo = async(req, res, next) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", //$1 is the value of the second parameter -> description
            [description]
        );
        
        res.json(newTodo.rows[0]);
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}