import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { TagsDataSource } from '../datasources';
import { Tags, TagsRelations, Pictures } from '../models';
import { PicturesRepository } from './pictures.repository';
export declare class TagsRepository extends DefaultCrudRepository<Tags, typeof Tags.prototype.id, TagsRelations> {
    protected picturesRepositoryGetter: Getter<PicturesRepository>;
    readonly pictures: HasManyRepositoryFactory<Pictures, typeof Tags.prototype.id>;
    constructor(dataSource: TagsDataSource, picturesRepositoryGetter: Getter<PicturesRepository>);
}
