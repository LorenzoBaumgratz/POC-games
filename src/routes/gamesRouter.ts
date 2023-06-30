import { Router } from "express";
import { deleteGame, getGames, postGame, updateGame } from "../controllers/gamesController";
import { validateSchema } from "../middlewares/validadeSchemaMiddleware";
import { gameSchema } from "../schemas/gameSchema";

const games=Router()

games.get("/games",getGames)
games.put("/games/:id",updateGame)
games.post("/games",validateSchema(gameSchema),postGame)
games.delete("/games/:id",deleteGame)

export default games
