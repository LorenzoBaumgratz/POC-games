import { Request, Response } from "express"
import { getGameService } from "../services/gameService"
import { deleteGameRep, postGameRep, updateGameRep } from "../respositories/gamesRepository"
import {createGame, updateGame } from "../protocols/gameProtocol"

export async function getGames(req: Request,res:Response) {
    try {
        const games=await getGameService()
        return res.status(200).send(games)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postGame(req: Request,res:Response) {
    const {name,value}=req.body as createGame
    try {
        await postGameRep(name,value)
        return res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateGame(req: Request,res:Response) {
    const {value}=req.body as updateGame
    const {id}=req.params 

    try {
        await updateGameRep(value,parseInt(id))
        return res.sendStatus(202)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteGame(req: Request,res:Response) {
    const {id}=req.params
    try {
        await deleteGameRep(parseInt(id))
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}