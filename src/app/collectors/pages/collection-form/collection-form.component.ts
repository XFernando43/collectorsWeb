import { Component } from '@angular/core';
import { CollectorFormComponent } from '../../components/collector-form/collector-form.component';
@Component({
  selector: 'app-collection-form',
  standalone: true,
  imports: [CollectorFormComponent],
  templateUrl: './collection-form.component.html',
  styleUrl: './collection-form.component.css'
})
export class CollectionFormComponent {

}
