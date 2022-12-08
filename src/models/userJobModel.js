const mongoose = require("mongoose")
const userJobSchema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "userId is required"],
        
    },
    jobId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : [true, "Please enter a jobId"],
        
    },
    status : {
        type : String,
        default: "applied",
        enum : ["applied","shortlisted", "rejected"],
        
    }
},
{
    timestamps: true
}
    )

const UserJob = mongoose.model("userJob", userJobSchema);

module.exports = UserJob;