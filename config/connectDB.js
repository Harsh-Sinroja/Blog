const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://botbx14:temp@temp.qrov1.mongodb.net/Blog?retryWrites=true&w=majority&appName=temp");
        console.log("Server is connected to MongoDB");
    } catch (error) {
        console.log("Error in connectDb : ",error);
    }
}

module.exports = connectDB;