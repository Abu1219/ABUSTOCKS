import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT;

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(protect);
app.get("/", (req, res) => res.send(`${port} is running`));

app.listen(port, () => console.log("Server is running"));
app.use(cookieParser());
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);
