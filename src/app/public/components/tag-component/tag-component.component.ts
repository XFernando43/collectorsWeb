import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-component',
  standalone: true,
  imports: [],
  templateUrl: './tag-component.component.html',
  styleUrl: './tag-component.component.css'
})
export class TagComponentComponent {
  @Input() public message:string;
  constructor(){
    this.message = '';
  } 
}
