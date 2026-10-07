// IvzXU4SC13inTl1b
// saru84311_db_user
// mongodb+srv://saru84311_db_user:IvzXU4SC13inTl1b@cluster0.iht0mmh.mongodb.net/

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;


// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("Database connection failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// This logs the host of the connected database and prints a cleaner error message while keeping the same overall logic.