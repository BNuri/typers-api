import bodyParser from "body-parser";
import "./db";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import quotesRouter from "./router/quotesRouter";
import morgan from "morgan";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/quotes", quotesRouter);

app.listen(PORT, () => console.log(`✅  Listening on port ${PORT}`));
