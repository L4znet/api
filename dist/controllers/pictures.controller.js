"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicturesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PicturesController = class PicturesController {
    constructor(picturesRepository) {
        this.picturesRepository = picturesRepository;
    }
    async create(pictures) {
        return this.picturesRepository.create(pictures);
    }
    async count(where) {
        return this.picturesRepository.count(where);
    }
    async find(filter) {
        return this.picturesRepository.find(filter);
    }
    async updateAll(pictures, where) {
        return this.picturesRepository.updateAll(pictures, where);
    }
    async findById(id, filter) {
        return this.picturesRepository.findById(id, filter);
    }
    async updateById(id, pictures) {
        await this.picturesRepository.updateById(id, pictures);
    }
    async replaceById(id, pictures) {
        await this.picturesRepository.replaceById(id, pictures);
    }
    async deleteById(id) {
        await this.picturesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/pictures'),
    rest_1.response(200, {
        description: 'Pictures model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Pictures) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, {
                    title: 'NewPictures',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pictures]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/pictures/count'),
    rest_1.response(200, {
        description: 'Pictures model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pictures)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/pictures'),
    rest_1.response(200, {
        description: 'Array of Pictures model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Pictures, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pictures)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/pictures'),
    rest_1.response(200, {
        description: 'Pictures PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pictures)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pictures, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/pictures/{id}'),
    rest_1.response(200, {
        description: 'Pictures model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pictures, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/pictures/{id}'),
    rest_1.response(204, {
        description: 'Pictures PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pictures, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pictures]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/pictures/{id}'),
    rest_1.response(204, {
        description: 'Pictures PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pictures]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/pictures/{id}'),
    rest_1.response(204, {
        description: 'Pictures DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PicturesController.prototype, "deleteById", null);
PicturesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PicturesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PicturesRepository])
], PicturesController);
exports.PicturesController = PicturesController;
//# sourceMappingURL=pictures.controller.js.map