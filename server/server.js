import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import planetsRouter from "./routes/planets/planets.router.js";
import launchesRouter from "./routes/launches/launches.router.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));
app.use(express.json());

app.use(express.static("public"));
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

app.listen(PORT, () => {
  console.log(`Listenig on Port ${PORT}`);
});
