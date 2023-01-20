const express = require("express");
const JobController = require("../controllers/jobController");
const { auth, checkUser } = require("../middlewares/authMiddlewares");
const app = express();

app.use(express.json());
const router = express.Router();

const { createJob, updateJob, getOneJob, getAllJob, deleteJob } = JobController;

router.route("/").post(auth, checkUser("admin"), createJob).get(getAllJob).delete(auth, checkUser("admin"), deleteJob);

router.route("/:id").get(getOneJob).put(auth, updateJob);

module.exports = router;
