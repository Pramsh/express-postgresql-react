import { pool } from "../db.js"
export const todoById = async(req, res, next) => {
    try {
        const todoById = await pool.query(
          `SELECT * FROM todo
           WHERE todo_id = $1
          `,[req.params.id])
          res.json(todoById.rows[0])
          next()
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      }
}
