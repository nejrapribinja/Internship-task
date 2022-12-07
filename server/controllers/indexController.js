const { pool } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signIn = async (req, res) => {
  const { email, password, name, lastName } = req.body;
  console.log(email, password, name, lastName);
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await pool.query(
      `INSERT INTO users (first_name, hashed_password, last_name, email) values($1, $2, $3, $4)`,
      [name, hashedPassword, lastName, email],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(201).redirect("/");
      }
    );
  } catch {
    console.log("s");
  }
};

exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

  if (user.rows.length == 0) {
    return res.status(400).send("Ne postoji korisnik s tim korisnickim imenom!");
  }

  if (await bcrypt.compare(password, user.rows[0].hashed_password)) {
    req.userInfo = user.rows[0];
    const tokenInfo = {
      token_id: req.userInfo.id,
      token_name: req.userInfo.first_name,
      token_last_name: req.userInfo.last_name,
      token_email: req.userInfo.email,
      token_role_id: req.userInfo.roles,
    };
    console.log(tokenInfo);
    const token = jwt.sign(tokenInfo, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.cookie("access_token", token);
    return res.json({
      token,
      tokenInfo,
    });
  } else {
    return res.status(400).send("Neispravna lozinka.");
  }
};

exports.logOut = (req, res, next) => {
  console.log("logout");
  res.clearCookie("access_token");
  res.redirect("/");
};

exports.getPosts = async (req, res) => {
  try {
    await pool.query(
      `SELECT *, to_char(p.date_post, 'DD/MM/YYYY') as dat from post p inner join users u on p.author = u.id`,
      [],
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
