const mongoose = require('mongoose');
const mongoUrl = "mongodb://127.0.0.1:27017/demodb?directConnection=true";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

// connectToMongo();
module.exports = connectToMongo;
