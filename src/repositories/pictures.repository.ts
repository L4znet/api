import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PicturesDataSource} from '../datasources';
import {Pictures, PicturesRelations} from '../models';

export class PicturesRepository extends DefaultCrudRepository<
  Pictures,
  typeof Pictures.prototype.id,
  PicturesRelations
> {
  constructor(
    @inject('datasources.Pictures') dataSource: PicturesDataSource,
  ) {
    super(Pictures, dataSource);
  }
}
