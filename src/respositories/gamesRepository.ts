import { db } from "../db/db";
import { game } from "../protocols/gameProtocol";

export async function getGamesRep(){
    const result=await db.query<game>(`select * from games;`)
    return result.rows;
}

export async function postGameRep(name,value){
    await db.query(`insert into games (name,value) values($1,$2);`,[name,value])
}

export async function updateGameRep(value,id){
    await db.query(`update games set value=$1 where "id"=$2;`,[value,id])
}

export async function deleteGameRep(id){
    await db.query(`delete from games where id=$1;`,[id])
}