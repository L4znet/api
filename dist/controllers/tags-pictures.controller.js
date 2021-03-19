"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsPicturesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TagsPicturesController = class TagsPicturesController {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async find(id, filter) {
        return this.tagsRepository.pictures(id).find(filter);
    }
    async create(id, pictures) {
        return this.tagsRepository.pictures(id).create(pictures);
    }
    async patch(id, pictures, where) {
        return this.tagsRepository.pictures(id).patch(pictures, where);
    }
    async delete(id, where) {
        return this.tagsRepository.pictures(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/tags/{id}/pictures', {
        responses: {
            '200': {
                description: 'Array of Tags has many Pictures',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Pictures) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsPicturesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/tags/{id}/pictures', {
        responses: {
            '200': {
                description: 'Tags model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Pictures) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, {
                    title: 'NewPicturesInTags',
                    exclude: ['id'],
                    optional: ['tagsId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsPicturesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/tags/{id}/pictures', {
        responses: {
            '200': {
                description: 'Tags.Pictures PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Pictures))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsPicturesController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/tags/{id}/pictures', {
        responses: {
            '200': {
                description: 'Tags.Pictures DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Pictures))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsPicturesController.prototype, "delete", null);
TagsPicturesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TagsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TagsRepository])
], TagsPicturesController);
exports.TagsPicturesController = TagsPicturesController;
//# sourceMappingURL=tags-pictures.controller.js.map