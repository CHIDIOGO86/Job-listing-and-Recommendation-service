const mongoose = require("mongoose")
const { isEmail } = require("validator")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength : [6, "name should have more than 6 characters"],
        maxlength : [30, "name should be less than 30 characters"]
    },
    email : {
        type : String,
        required : [true, "Please enter an email"],
        unique : true,
        lowercase : true,
        validate : [isEmail, "Please enter a valid email"]
    },
    password : {
        type : String,
        required : [true, "Password field is required"],
        minlength : [6, "Password is less than 6 characters"],
        select: false
    },
    confirmPassword : {
        type : String,
        required : [true, "Make sure input is the same as password"],
        minlength : [6, "Password is less than 6 characters"],
        select: false
    },
    skills: {
        type: String,
        enum: ["Frontend", "Backend", "Product-design"],
      },
      experience: {
         type: Number,
         required: [true, "Please enter your years of experience "],
      },
      location: {
         type: String,
         required: [true, "Please enter your location"],
      },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;