const Job = require("../models/jobModel.js");


exports.recommendJobs = async (req, res) => {
    try {
  
  const user = req.user
        //const recommend = req.body.occasion;
        const findBackEnd = await Job.find({ experience : user.experience })
        if (findBackEnd) {
          return res.status(200).json({
              status: true,
              message: "Jobs recommended",
              jobRecommended: findBackEnd
          })
        } else {
            return res.status(404).send({
                status: true,
                message: "Nothing to recommend yet",
            })
        } 
    } catch (err) {
        console.log(err)
        return res.status(401).send({
        status: false,
        message: "Invalid input",
        });
    }
} 