import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/Route.js";

const app = express();
app.use(express.json());
app.use(cors());

// route
app.use("/api", router);

const PORT = process.env.PORT;
const mongodbUrl = process.env.mongodbUrl;

app.get("/", (req, res) => {
  res.status(200).json("Server Running");
});
app.listen(PORT, () => console.log("Server is Running"));

try {
  mongoose.connect(mongodbUrl);
  console.log("DB CONNECTED");
} catch (error) {
  console.log(error);
}
