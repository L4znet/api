import { DefaultCrudRepository } from '@loopback/repository';
import { PicturesDataSource } from '../datasources';
import { Pictures, PicturesRelations } from '../models';
export declare class PicturesRepository extends DefaultCrudRepository<Pictures, typeof Pictures.prototype.id, PicturesRelations> {
    constructor(dataSource: PicturesDataSource);
}
