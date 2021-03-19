"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pictures = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Pictures = class Pictures extends repository_1.Entity {
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
], Pictures.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pictures.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pictures.prototype, "path", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Pictures.prototype, "tagsId", void 0);
Pictures = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pictures);
exports.Pictures = Pictures;
//# sourceMappingURL=pictures.model.js.map