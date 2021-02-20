import { Injectable } from '@angular/core';
import { Map as LeafletMap, TileLayer } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class TilesService {
    private readonly openStreetMapUrl =
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    private readonly openStreetMapAttribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    public tiles!: TileLayer;

    public addMapTiles(map: LeafletMap): void {
        this.tiles = new TileLayer(this.openStreetMapUrl, {
            attribution: this.openStreetMapAttribution,
        }).addTo(map);
    }

}
