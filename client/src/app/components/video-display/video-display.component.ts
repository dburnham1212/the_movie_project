import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-display.component.html',
  styleUrl: './video-display.component.sass'
})
export class VideoDisplayComponent {
  @Input() videoDisplayDetails:any[] = [];

  constructor(private sanitizer: DomSanitizer) {
  }

  getSanitizedYTVideoUrl(key:string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }
}
