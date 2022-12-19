const express = require("express");
const UserController = require("../controllers/userController");
const { auth, checkUser } = require("../middlewares/authMiddlewares");
const app = express();

app.use(express.json());
const router = express.Router();

const { updateUser, getUser, getAllUsers, deleteUser } = UserController;

router.route("/user").get(auth, checkUser("admin"), getAllUsers).delete(auth, checkUser("admin"), deleteUser).put(auth, updateUser);

router.route("/user/:id").get(auth, getUser);

module.exports = router;
