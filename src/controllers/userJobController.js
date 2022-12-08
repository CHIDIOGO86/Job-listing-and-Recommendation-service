const { application } = require("express")
const { response } = require("../../app")
const { castObject } = require("../models/userJobModel")
const UserJob = require ("../models/userJobModel")
const Job = require ("../models/userJobModel")
exports.createUserJob = async (req, res) => {
    try{
        const { userId, jobId } =  req.body
        const jobCheck = await Job.findById(jobId)
        if (!jobCheck) {
            return res.status(404).json({
            status: false,
            message: "Job does not exist"
            })
        
        }
            const userJob = await UserJob.create({
                userId,
                jobId
            })
            return res.status(201).json({
                status: true,
                application: userJob,
                message: "job created"
            })

            
    } catch (error){
        return res.status(400).json(error.message)

    }


}

exports.updateUserJob = async (req, res) =>{
    try{
    const ID = req.params.id
    const userJob = await UserJob.findById(ID)
    userJob.status = req.body.status
    await userJob.save();
    return res.status(200).json({
        status: true,
        message: "userJob updated successfulLy",
        updatedApplication: userJob
    })

    
    } catch (error){
        return res.status(400).json(error.message)
}
},

exports.getUserJob = async (req, res) =>{
    try{
        const ID = req.params.id
    const userJob = await UserJob.findById(ID)
    return res.status(200).json({
        status: true,
        message: "userJob found",
        getApplication: userJob
    })
}catch(error){
    return res.status(400).json(error.message)
}
}