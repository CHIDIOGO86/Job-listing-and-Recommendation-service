const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the job title"],
  },
  description: {
    type: String,
    required: [true, "Please enter job description"],
  },
  location: {
    type: String,
    required: [true, "Enter the job location"],
  },
  jobType: {
    type: String,
    required: [true, "Please enter the job type"],
  },
  keywords: {
    type: String,
    enum: ["Frontend", "Backend", "Product-design"],
    required: [true, "Please enter the job type"],
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
