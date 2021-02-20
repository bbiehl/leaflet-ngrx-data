import { AfterViewInit, Component } from '@angular/core';
import { Map as LeafletMap } from 'leaflet';
import { MarkerService } from '../services/marker.service';
import { TilesService } from '../services/tiles.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    public leafletMap!: LeafletMap;

    constructor(
        private markerService: MarkerService,
        private tilesService: TilesService,
    ) {}

    ngAfterViewInit(): void {
        this.createMap();
        this.tilesService.addMapTiles(this.leafletMap);
        this.markerService.addMarkers(this.leafletMap);
    }

    private createMap(): void {
        this.leafletMap = new LeafletMap('leafletMapId', {
            center: {
                lat: 41.2635,
                lng: -95.9527,
            },
            maxZoom: 17,
            minZoom: 6,
            zoom: 11,
        });
    }
}
