const express = require("express");
const Job = require("../models/jobModel");
const multer = require("multer");
//  sharp const= require("sharp");
const { handleErrors } = require("../utils/jobErrors");
const path = require("path");
const dirPath = path.join(__dirname, "/public");

// const multerStorage = multer.memoryStorage();

// const multerFilter = (request, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb("Upload a valid image", false);
//   }
// };
// const upload = multer({ storage: multerStorage });

// exports.uploadImage = upload.single("image");

// exports.resizeImage = async (req, res, next) => {
//   console.log(req.file);
//   const imageName = `${req.body.JobName}-${Date.now()}.jpeg`;
//   req.body.image = imageName;
//   console.log("dirPath", dirPath);
//   await sharp(req.file.buffer)
//     .resize(200, 200)
//     .toFormat("jpeg")
//     .toFile(`public/images/${imageName}`)
//     .then((info) => console.log(info))
//     .catch((err) => console.log(err));
//   next();
// };

exports.createJob = async (request, response) => {
  try {
    const { title, description, location, jobType, keywords } = request.body;
    const newJob = new Job({ title, description, location, jobType, keywords });
    await newJob.save();
    return response.status(201).send({
      status: true,
      message: "Job has been created",
      data: newJob,
    });
  } catch (err) {
    const error = handleErrors(err);
    return response.status(400).json({ error });
  }
};

exports.updateJob = async (request, response) => {
  try{
    const id = request.params.id;
    const findJob = await Job.findById(id);
    findJob.description = request.body.description;
    findJob.location = request.body.location;
    findJob.keywords = request.body.keywords;
    await findJob.save();
    return response.status(200).send({
      status: true,
      message: "Job has been updated successfully",
      data: findJob,
    });
  }catch(err){
    const error = handleErrors(err);
    return response.status(400).json({ error });
  }
};

exports.getOneJob = async (request, response) => {
  try {
    const id = request.params.id;
    const findOneJob = await Job.findById(id);

    if (!findOneJob) {
      return response.status(404).send({
        status: false,
        message: "Job not found",
      });
    } else {
      return response.status(200).send({
        status: true,
        message: "Job found",
        Blog: findOneJob,
      });
    }
  } catch (err) {
    if (err.path === "_id") {
      return response.status(401).send({
        status: false,
        message: "Invalid ID",
      });
    } else {
      return response.status(500).send({
        status: false,
        message: "Server Error",
      });
    }
  }
};

exports.getAllJob = async (request, response) => {
  const findAllJob = await Job.find();
  return response.status(200).send({
    status: true,
    message: "All Jobs",
    data: findAllJob,
  });
};

exports.deleteJob = async (request, response) => {
  try {
  const { id } = request.headers;
    const findJob = await Job.findByIdAndDelete(id);
    if (findJob) {
      return response.status(200).send({
        status: true,
        message: "Job deleted successfully",
      });
    } else {
      return response.status(404).send({
        status: false,
        message: "Job not found",
      });
    }
  } catch (error) {
    return response.status(400).send(error.message)
  }

};
