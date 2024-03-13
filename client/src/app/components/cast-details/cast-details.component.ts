import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cast-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cast-details.component.html',
  styleUrl: './cast-details.component.sass'
})
export class CastDetailsComponent {
  @Input() castDetails:any[] = [];
}
