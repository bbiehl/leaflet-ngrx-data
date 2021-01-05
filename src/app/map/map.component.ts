import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighborhood } from '../models/neighborhood';
import { NeighborhoodsService } from '../services/neighborhoods.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
    public isLoading$: Observable<boolean>;
    public errors$: Observable<any>;
    public neighborhoods$: Observable<Neighborhood[]>;

    constructor(private neighbohoodsService: NeighborhoodsService ) {
        this.isLoading$ = this.neighbohoodsService.loading$;
        this.errors$ = this.neighbohoodsService.errors$;
        this.neighborhoods$ = this.neighbohoodsService.entities$;
    }

    ngOnInit(): void {
        this.getNeighborhoods();
    }

    private getNeighborhoods(): void {
        this.neighbohoodsService.getAll();
    }

    ngAfterViewInit(): void {
    }
}
