import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {TagsDataSource} from '../datasources';
import {Tags, TagsRelations, Pictures} from '../models';
import {PicturesRepository} from './pictures.repository';

export class TagsRepository extends DefaultCrudRepository<
  Tags,
  typeof Tags.prototype.id,
  TagsRelations
> {

  public readonly pictures: HasManyRepositoryFactory<Pictures, typeof Tags.prototype.id>;

  constructor(
    @inject('datasources.Tags') dataSource: TagsDataSource, @repository.getter('PicturesRepository') protected picturesRepositoryGetter: Getter<PicturesRepository>,
  ) {
    super(Tags, dataSource);
    this.pictures = this.createHasManyRepositoryFactoryFor('pictures', picturesRepositoryGetter,);
    this.registerInclusionResolver('pictures', this.pictures.inclusionResolver);
  }
}
