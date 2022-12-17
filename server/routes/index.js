const router = require("express").Router();
const indexController = require("../controllers/indexController");

router.post("/signIn", indexController.signIn);
router.post("/logIn", indexController.logIn);
router.get("/logOut", indexController.logOut);
router.get("/getPosts", indexController.getPosts);

module.exports = { router };
