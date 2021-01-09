import { AfterViewInit, Component, Input } from '@angular/core';
import { Map as LeafletMap, TileLayer } from 'leaflet';
import { Neighborhood } from '../models/neighborhood';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
    @Input() isLoading!: boolean | null;
    @Input() errors!: any | null;
    @Input() neighborhoods!: Neighborhood[] | null;
    public leafletMap!: LeafletMap;
    public tiles!: TileLayer;

    ngAfterViewInit(): void {
        this.createMap();
    }

    private createMap(): void {
        this.leafletMap = new LeafletMap('leafletMapId', {
            center: {
                lat: 41.2,
                lng: -95.95
            },
            maxZoom: 17,
            minZoom: 6,
            zoom: 9,
        });
        this.tiles = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.leafletMap);
    }
}
