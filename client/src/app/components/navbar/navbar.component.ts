import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  constructor(private el: ElementRef) {

  }

  title = 'The Movie Project';
  open = false;
  

  onOpen() {
    this.open = !this.open;
  }
}
