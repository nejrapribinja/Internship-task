const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  try {
    const jwtToken = req.cookies.access_token;
    //console.log(jwtToken);

    if (!jwtToken) {
      return res.status(403).json("Not authorize");
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not authorize");
  }
};
