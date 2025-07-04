const mongosse = require("mongoose");

const connectDB = async () =>{
    try {
        await mongosse.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log("Error connecting to mongoDb",error);
        process.exit(1);
    };
};

module.exports = connectDB;