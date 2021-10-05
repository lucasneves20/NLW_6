import { getCustomRepository } from "typeorm";
import { UsersRepositories } from '../repositories/UsersRepositories' 
import { classToPlain } from 'class-transformer'



export class ListUsersService {

    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories)

        const users = usersRepository.find()

        return classToPlain(users)
    }

} 