
import prisma from "../db/db";
import { createGame } from "../protocols/gameProtocol";

export async function getGamesRep(){
    return await prisma.games.findMany()
    //select * from games
}

export async function postGameRep(name: string,value:number){
    await prisma.games.create({
        data:{
            name,
            value
        },
    }
    )
    // await db.query(`insert into games (name,value) values($1,$2);`,[name,value])
}

export async function updateGameRep(value:number,id:number){
    await prisma.games.update({
        data:value,
        where:{
            id
        }
    })
    // await db.query(`update games set value=$1 where "id"=$2;`,[value,id])
}

export async function deleteGameRep(id:number){
    await prisma.games.delete({
        where:{
            id
        }
    })
    // await db.query(`delete from games where id=$1;`,[id])
}