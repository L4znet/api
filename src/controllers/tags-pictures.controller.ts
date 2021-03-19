import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Tags,
  Pictures,
} from '../models';
import {TagsRepository} from '../repositories';

export class TagsPicturesController {
  constructor(
    @repository(TagsRepository) protected tagsRepository: TagsRepository,
  ) { }

  @get('/tags/{id}/pictures', {
    responses: {
      '200': {
        description: 'Array of Tags has many Pictures',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pictures)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Pictures>,
  ): Promise<Pictures[]> {
    return this.tagsRepository.pictures(id).find(filter);
  }

  @post('/tags/{id}/pictures', {
    responses: {
      '200': {
        description: 'Tags model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pictures)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tags.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pictures, {
            title: 'NewPicturesInTags',
            exclude: ['id'],
            optional: ['tagsId']
          }),
        },
      },
    }) pictures: Omit<Pictures, 'id'>,
  ): Promise<Pictures> {
    return this.tagsRepository.pictures(id).create(pictures);
  }

  @patch('/tags/{id}/pictures', {
    responses: {
      '200': {
        description: 'Tags.Pictures PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pictures, {partial: true}),
        },
      },
    })
    pictures: Partial<Pictures>,
    @param.query.object('where', getWhereSchemaFor(Pictures)) where?: Where<Pictures>,
  ): Promise<Count> {
    return this.tagsRepository.pictures(id).patch(pictures, where);
  }

  @del('/tags/{id}/pictures', {
    responses: {
      '200': {
        description: 'Tags.Pictures DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Pictures)) where?: Where<Pictures>,
  ): Promise<Count> {
    return this.tagsRepository.pictures(id).delete(where);
  }
}
