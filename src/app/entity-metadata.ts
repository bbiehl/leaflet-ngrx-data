import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Neighborhood: {},
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames,
};
