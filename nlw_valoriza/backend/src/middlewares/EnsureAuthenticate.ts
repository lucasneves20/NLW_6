import { Request, Response, NextFunction } from 'express'

import { verify } from 'jsonwebtoken'
import 'dotenv/config'

interface IPayload {
    sub: string
}

export function EnsureAuthenticate(request: Request, response: Response, next: NextFunction) {
    // receber o token
    const AuthToken = request.headers.authorization

    // validar se o token está preenchido
    if (!AuthToken) {
        return response.status(401).end()
    }
    const [, token] = AuthToken.split(" ")

    try{ 
        const { sub } = verify( token, process.env.SECRET_KEY) as IPayload
        
        request.user_id = sub
    } catch(err) {
        return response.status(401).end()
    }

    //validar se o token é válido
    
    //recuperar informações do usuário
    return next()
}