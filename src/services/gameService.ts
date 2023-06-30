import { getGamesRep } from "../respositories/gamesRepository";

export async function getGameService(){
    const result=await getGamesRep()
    return result
}
