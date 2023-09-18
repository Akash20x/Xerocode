import mongoose from "mongoose";

const waitlistUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
})

const WaitlistUser = mongoose.models.waitlistUsers || mongoose.model("waitlistUsers", waitlistUserSchema);

export default WaitlistUser;