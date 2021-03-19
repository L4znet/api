import { Count, Filter, Where } from '@loopback/repository';
import { Tags, Pictures } from '../models';
import { TagsRepository } from '../repositories';
export declare class TagsPicturesController {
    protected tagsRepository: TagsRepository;
    constructor(tagsRepository: TagsRepository);
    find(id: number, filter?: Filter<Pictures>): Promise<Pictures[]>;
    create(id: typeof Tags.prototype.id, pictures: Omit<Pictures, 'id'>): Promise<Pictures>;
    patch(id: number, pictures: Partial<Pictures>, where?: Where<Pictures>): Promise<Count>;
    delete(id: number, where?: Where<Pictures>): Promise<Count>;
}
