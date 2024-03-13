import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.sass'
})
export class ReviewDetailsComponent {
  @Input() reviewDetails: any[] = [];
}
