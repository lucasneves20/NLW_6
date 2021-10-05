import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";



export class ListUserReceiveComplementsService {
    async execute(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)

        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            }
        })

        return compliments
    }
}