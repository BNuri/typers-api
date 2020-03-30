import "./models/Quote";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const URL = process.env.PRODUCTION
  ? process.env.MONGO_URL_PRODUCTION
  : process.env.MONGO_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log(`✅  Connected to DB`);
const handleError = error =>
  console.log(`❗️  Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
