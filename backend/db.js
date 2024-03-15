// const mongoose = require('mongoose');
// const mongoUrl = "mongodb://localhost:27017/demodb";

// const connectToMongo = async() => {
//     try{
//         await mongoose.connect(mongoUrl);
//         console.log("Connect to Mongoose Successfully");
//     }catch(error){
//         console.log("MongoDb connection Error ",error);
//     }
// };

// connectToMongo();

// module.exports=connectToMongo;

const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/demodb";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

connectToMongo();
module.exports = connectToMongo;
