import { getCustomRepository } from "typeorm";
import {TagRepository} from '../repositories/tagsRepository' 
import { classToPlain } from 'class-transformer'



export class ListTagsService {

    async execute() {
        const tagsRepository = getCustomRepository(TagRepository)

        const tags = tagsRepository.find()

        return classToPlain(tags)
    }

} 