const { pool } = require("../db");

exports.addPost = async (req, res) => {
  try {
    const { title, description, date, author } = req.body;
    console.log(title, description, date, author);
    await pool.query(
      `insert into post (title, date_post, description, author) 
                    values ($1, $2, $3, $4)`,
      [title, date, description, author],
      (err, result) => {
        if (err) {
          console.info(err);
        }
        res.status(209).send("yes");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getUserPosts = async (req, res) => {
  const id_user = req.user.token_id;
  try {
    await pool.query(
      `SELECT p.*, to_char(p.date_post, 'yyyy-mm-dd') as dat, u.first_name, u.last_name from post p 
          inner join users u on p.author = u.id 
          WHERE p.author = $1`,
      [id_user],
      (err, result) => {
        if (err) {
          console.info(err);
        }
        res.json(result.rows);
        console.log(result.rows);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.editPost = async (req, res) => {
  try {
    const { title, description, date, postID } = req.body;
    console.log(title, description, date, postID);
    await pool.query(
      `UPDATE post set title=$1, date_post=$2, description=$3 WHERE id=$4`,
      [title, date, description, postID],
      (err, result) => {
        if (err) {
          console.info(err);
        }
        res.status(209).send("yes");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM post WHERE id = $1", [id]);
    res.status(200);
  } catch (err) {
    console.log(err.message);
  }
};
