import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.sass'
})
export class MovieSliderComponent {
  @Input() movies:any[] = [];
  @Input() heading:string = '';

  originalOffsetX = 0;
  newMouseOffset = 0;
  mouseDown = false;
 
  onMouseDown(event: MouseEvent) {
    event.preventDefault()

    if(this.originalOffsetX === 0) {
      this.originalOffsetX = event.clientX;
    } else {
      this.originalOffsetX = event.clientX - this.newMouseOffset
    }

    this.mouseDown = true
  }

  onMouseMove(event: MouseEvent) {
    if(this.mouseDown) {
      this.newMouseOffset = event.clientX - this.originalOffsetX;
    }
  }

  onMouseUp(event: MouseEvent) {
    this.mouseDown = false
  }
}
