import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map as LeafletMap } from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

    public leafletMap!: LeafletMap;

    ngAfterViewInit(): void {
    }
}
