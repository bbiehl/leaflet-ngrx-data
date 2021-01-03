import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Neighborhood } from '../models/neighborhood';

@Injectable({
    providedIn: 'root',
})
export class NeighborhoodsService extends EntityCollectionServiceBase<Neighborhood> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Neighborhood', serviceElementsFactory);
  }
}
