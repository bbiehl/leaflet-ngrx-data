import { Injectable } from '@angular/core';
import { LayerGroup, Map as LeafletMap, Marker } from 'leaflet';
import { Observable } from 'rxjs';
import { Neighborhood } from '../models/neighborhood';
import { NeighborhoodsService } from './neighborhoods.service';

@Injectable({
    providedIn: 'root',
})
export class MarkerService {
    public neighborhoods$: Observable<Neighborhood[]>;

    constructor(private neighbohoodsService: NeighborhoodsService) {
        this.neighborhoods$ = this.neighbohoodsService.entities$;
    }

    public addMarkers(map: LeafletMap): void {
        this.neighborhoods$.subscribe((neighborhoods: Neighborhood[]) => {
            for (const n of neighborhoods) {
                const lat = n.lat;
                const lng = n.lng;
                const marker = new Marker([lat, lng]).addTo(map);
                marker.bindPopup(
                    `<div class="popup">
                        <h3>${n.name}</h3>
                        <img style="max-width: -webkit-fill-available;" src="${n.imgUrl}" />
                        <p>${n.description}</p>
                    </div>`
                );
            }
        });
    }
}
