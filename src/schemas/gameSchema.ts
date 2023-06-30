import Joi from "joi";
import { createGame } from "../protocols/gameProtocol";

export const gameSchema=Joi.object<createGame>({
    name:Joi.string().required(),
    value: Joi.number().required()
})