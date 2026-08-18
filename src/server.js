import express from "express";
import movieRouter from "./routes/movie.routes.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFound } from "./middleware/notFound.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.use(requestLogger);


app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});


app.use("/api/movies", movieRouter);


app.use(notFound);


app.listen(PORT, () => {
  console.log(`Movie Watchlist API running at http://localhost:${PORT}`);
});