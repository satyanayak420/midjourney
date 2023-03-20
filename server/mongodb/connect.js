import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("You are connected to Mongodb instance now"))
    .catch((err) => console.log(err));
};

export default connectDB;
