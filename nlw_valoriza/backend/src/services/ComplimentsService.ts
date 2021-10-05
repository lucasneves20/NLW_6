import { UsersRepositories } from './../repositories/UsersRepositories';
import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";


interface IComplimentsRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

export class CreateComplimentsService {

    async execute({tag_id, user_sender, user_receiver, message}: IComplimentsRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const userRepository = getCustomRepository(UsersRepositories)

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver")
        }

        const userReceiverExists = await userRepository.findOne(user_receiver)

        if(!userReceiverExists) {
            throw new Error("User Receiver does not exists")
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepository.save(compliment)

        return compliment

    }

}