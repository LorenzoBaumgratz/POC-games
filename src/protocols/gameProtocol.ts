import { games } from "@prisma/client"

export type createGame=Omit<games,"id">
export type updateGame=Omit<createGame,"name">
export type IdGame={
    id:number
}