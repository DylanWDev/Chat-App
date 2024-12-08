import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);


    } catch (error) {
        
    }
}