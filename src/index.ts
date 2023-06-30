import express from "express"
import games from "./routes/gamesRouter";

const app = express(); 
app.use(express.json());
app.use(games)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});