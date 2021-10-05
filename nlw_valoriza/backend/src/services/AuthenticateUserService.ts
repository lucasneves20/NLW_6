import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import 'dotenv/config'


interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories)

        // verificar se o email existe, se não existir, retirna erro

        const user = await usersRepository.findOne({ 
            email
        })

        if(!user) {
            throw new Error("Email/Password incorrect")
        }

        // verificar se a senha está correta

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        // Gerar o token

        const token = sign(
            {
                email: user.email,
            }, process.env.SECRET_KEY, 
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token

    }

}