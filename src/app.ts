import express from "express"
import games from "./routes/gamesRouter";

const app = express(); 
app.use(express.json());
app.use(games)

export default app