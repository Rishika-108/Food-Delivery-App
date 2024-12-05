import mongoose from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://rishikathakur334:Rishi108@cluster0.vnyit.mongodb.net/food-del').then(()=>console.log("DB connected")
    )
}