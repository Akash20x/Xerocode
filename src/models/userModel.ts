import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'user', // Set a default role if needed
      },
    waitlistEmails:  [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WaitlistUser",
        },
        email: {
            type: String,
            required: true,
        },
    }],
})

 
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;