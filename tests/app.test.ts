import supertest from "supertest"
import app from "../src/app"
import prisma from "../src/db/db"

const server=supertest(app)

beforeAll(async()=>{
    //comando para limpar banco de dados
    await prisma.games.deleteMany()
})

// beforeEach(()=>{

// })

// afterAll(()=>{

// })

// afterEach(()=>{

// })

describe("testes da POC",()=>{
    it("get /games",async()=>{
        const result=await server.get("/games")
        // const {status}=result
        expect(result.status).toBe(200)
        // expect(result.body).toHaveLength
        // expect(result.body).toEqual()
        // expect(result.body).toContain()
        // expect(result.body).toMatchObject({})    //especie de "contem" do objeto
        expect(result.body).toEqual(
            expect.arrayContaining([
                    expect.objectContaining({
                    id:expect.any(Number),
                    name:expect.any(String),
                    value:expect.any(Number)
                    })
        ]))
    })
})