import { Component } from '@angular/core';
import { CollectorTableComponent } from '../../components/collector-table/collector-table.component';

@Component({
  selector: 'app-collectors-dashboard',
  standalone: true,
  imports: [CollectorTableComponent],
  templateUrl: './collectors-dashboard.component.html',
  styleUrl: './collectors-dashboard.component.css'
})
export class CollectorsDashboardComponent {

}
