import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI
    //     , {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // }
    );
    console.log(`MongoDB connected :${conn.connection.host}`);
  } catch (error) {
    console.error(`error${error},${process.env.MONGO_URI}`);
    // process.exit(1);
  }
};

mongoose.set('strictQuery', true);
export default connectDB;