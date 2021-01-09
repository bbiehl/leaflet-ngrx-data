import { AfterViewInit, Component, Input } from '@angular/core';
import { Map as LeafletMap, TileLayer } from 'leaflet';
import { Neighborhood } from '../models/neighborhood';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    @Input() isLoading!: boolean | null;
    @Input() errors!: any | null;
    @Input() neighborhoods!: Neighborhood[] | null;
    public leafletMap!: LeafletMap;
    private readonly openStreetMapUrl =
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    private readonly openStreetMapAttribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    private readonly tiles = new TileLayer(this.openStreetMapUrl, {
        attribution: this.openStreetMapAttribution,
    });

    ngAfterViewInit(): void {
        this.createMap();
    }

    private createMap(): void {
        this.leafletMap = new LeafletMap('leafletMapId', {
            center: {
                lat: 41.2,
                lng: -95.95,
            },
            layers: [this.tiles],
            maxZoom: 17,
            minZoom: 6,
            zoom: 9,
        });
    }
}
