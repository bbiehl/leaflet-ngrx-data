import { Injectable } from '@angular/core';
import { Icon, Map as LeafletMap, Marker } from 'leaflet';
import { Observable } from 'rxjs';
import { Neighborhood } from '../models/neighborhood';
import { NeighborhoodsService } from './neighborhoods.service';

@Injectable({
    providedIn: 'root',
})
export class MarkerService {
    private readonly neighborhoods$: Observable<Neighborhood[]>;
    private readonly icon = new Icon({
        iconUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconRetinaUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41],
    });

    constructor(private neighbohoodsService: NeighborhoodsService) {
        this.neighborhoods$ = this.neighbohoodsService.entities$;
    }

    public addMarkers(map: LeafletMap): void {
        this.neighborhoods$.subscribe((neighborhoods: Neighborhood[]) => {
            for (const n of neighborhoods) {
                const lat = n.lat;
                const lng = n.lng;
                const marker = new Marker([lat, lng], {
                    icon: this.icon,
                }).addTo(map);
                marker.bindPopup(`${n.name}`);
            }
        });
    }
}
