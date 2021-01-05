import { Component, Input } from '@angular/core';
import { Neighborhood } from '../models/neighborhood';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() isLoading!: boolean | null;
  @Input() errors!: any | null;
  @Input() neighborhoods!: Neighborhood[] | null;
}
