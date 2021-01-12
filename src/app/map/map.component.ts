import { AfterViewInit, Component } from '@angular/core';
import { Map as LeafletMap, TileLayer } from 'leaflet';
import { MarkerService } from '../services/marker.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    public leafletMap!: LeafletMap;
    private readonly openStreetMapUrl =
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    private readonly openStreetMapAttribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    public tiles = new TileLayer(this.openStreetMapUrl, {
        attribution: this.openStreetMapAttribution,
    });

    constructor(private markerService: MarkerService) {}

    ngAfterViewInit(): void {
        this.createMap();
        this.markerService.addMarkers(this.leafletMap);
    }

    private createMap(): void {
        this.leafletMap = new LeafletMap('leafletMapId', {
            center: {
                lat: 41.2635,
                lng: -95.9527,
            },
            layers: [this.tiles],
            maxZoom: 17,
            minZoom: 6,
            zoom: 12,
        });
    }
}
