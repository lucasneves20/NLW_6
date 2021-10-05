import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import cors from 'cors'

import './database'

const port = "3001"

const app = express()

app.use(express.json())

app.use(cors())


app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "Algou deu errado",
        message: "Internal Server Error"
    })
})

app.listen(port, () => console.log(`tudo rodando normalmente: http://localhost:${port}`))

export { port }