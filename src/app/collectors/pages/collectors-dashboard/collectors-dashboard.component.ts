import { Component } from '@angular/core';
import { CollectorTableComponent } from '../../components/collector-table/collector-table.component';
import { SidebardComponent } from '../../../public/components/sidebard/sidebard.component';

@Component({
  selector: 'app-collectors-dashboard',
  standalone: true,
  imports: [CollectorTableComponent,SidebardComponent],
  templateUrl: './collectors-dashboard.component.html',
  styleUrl: './collectors-dashboard.component.css'
})
export class CollectorsDashboardComponent {

}
