import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    neighborhood: {},
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames,
};
