import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-slider.component.html',
  styleUrl: './tv-slider.component.sass'
})
export class TvSliderComponent {
  @Input() tvShows:any[] = [];
  @Input() heading:string = '';
}
