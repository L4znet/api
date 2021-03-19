"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const pictures_model_1 = require("./pictures.model");
let Tags = class Tags extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Tags.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tags.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => pictures_model_1.Pictures),
    tslib_1.__metadata("design:type", Array)
], Tags.prototype, "pictures", void 0);
Tags = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=tags.model.js.map