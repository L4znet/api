import { Entity } from '@loopback/repository';
export declare class Pictures extends Entity {
    id?: number;
    name: string;
    path: string;
    tagsId?: number;
    constructor(data?: Partial<Pictures>);
}
export interface PicturesRelations {
}
export declare type PicturesWithRelations = Pictures & PicturesRelations;
