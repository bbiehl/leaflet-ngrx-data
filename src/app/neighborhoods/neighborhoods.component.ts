import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighborhood } from '../models/neighborhood';
import { NeighborhoodsService } from '../services/neighborhoods.service';

@Component({
  selector: 'app-neighborhoods',
  templateUrl: './neighborhoods.component.html',
  styleUrls: ['./neighborhoods.component.scss']
})
export class NeighborhoodsComponent implements OnInit {
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

}
