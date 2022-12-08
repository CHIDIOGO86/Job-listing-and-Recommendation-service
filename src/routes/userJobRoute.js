const express = require("express");
const userJobController = require("../controllers/userJobController");
const { auth, checkUser } = require("../middlewares/authMiddlewares");
const app = express();

app.use(express.json());
const router = express.Router();

const  { createUserJob, updateUserJob, getUserJob, deleteUserJob } = userJobController;

router.route("/").post(auth, checkUser("admin"), createUserJob).delete(auth, deleteUserJob);

router.route("/:id").get(auth, getUserJob).put(auth, checkUser("admin"), updateUserJob);

module.exports = router;