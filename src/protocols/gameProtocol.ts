export type game={
    id:number,
    name:string,
    value:number
}

export type createGame=Omit<game,"id">
export type updateGame=Omit<createGame,"name">
export type IdGame={
    id:number
}