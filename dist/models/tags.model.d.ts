import { Entity } from '@loopback/repository';
import { Pictures } from './pictures.model';
export declare class Tags extends Entity {
    id?: number;
    name: string;
    pictures: Pictures[];
    constructor(data?: Partial<Tags>);
}
export interface TagsRelations {
}
export declare type TagsWithRelations = Tags & TagsRelations;
