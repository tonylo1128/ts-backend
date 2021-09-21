import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";


import "./connectDB.js";

console.log(cors)
dotenv.config();
const app: Application = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.json({
      return_value: "TS App is DAMN HARD!"
    });
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
})