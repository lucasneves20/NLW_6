import { getCustomRepository } from 'typeorm'
import { TagRepository } from '../repositories/tagsRepository'

interface ITagRequest {
    name: string;
}

export default class CreateTagService {
    async execute({name}: ITagRequest) {
        const tagRepository = getCustomRepository(TagRepository)

        if (!name) {
            throw new Error("incorrect Name")
        }

        const TagAlredyExists = await tagRepository.findOne({
            name
        })

        if(TagAlredyExists) {
            throw new Error('Tag Alredy Exists!')
        }

        const tag = tagRepository.create({ 
            name
        })

        await tagRepository.save(tag)

        return tag;
    }
}