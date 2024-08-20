import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebard.component.html',
  styleUrl: './sidebard.component.css'
})
export class SidebardComponent {
  public moveLeftRight: string = 'moveRight'; 
  public showsideBar: boolean = true; 

  constructor(private router: Router) {}

  handleShow() {
    this.showsideBar = !this.showsideBar;
    this.moveLeftRight = this.showsideBar ? 'moveRight' : 'moveLeft';
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
