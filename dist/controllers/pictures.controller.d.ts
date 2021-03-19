import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pictures } from '../models';
import { PicturesRepository } from '../repositories';
export declare class PicturesController {
    picturesRepository: PicturesRepository;
    constructor(picturesRepository: PicturesRepository);
    create(pictures: Pictures): Promise<Pictures>;
    count(where?: Where<Pictures>): Promise<Count>;
    find(filter?: Filter<Pictures>): Promise<Pictures[]>;
    updateAll(pictures: Pictures, where?: Where<Pictures>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Pictures>): Promise<Pictures>;
    updateById(id: number, pictures: Pictures): Promise<void>;
    replaceById(id: number, pictures: Pictures): Promise<void>;
    deleteById(id: number): Promise<void>;
}
