import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-season-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-season-details.component.html',
  styleUrl: './tv-season-details.component.sass'
})
export class TvSeasonDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {

  }

  tvDetails:any;
  tvSeasonDetails:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    let seasonNumber = this.router.snapshot.paramMap.get('season_number');
    this.getTvDetails(getParamId);
    this.getTvSeasonDetails(getParamId, seasonNumber);
  }

  getTvDetails(id:any) {
    this.service.getTvDetails(id).subscribe((result) => {
      console.log(result)
      this.tvDetails = result;
    })
  }

  getTvSeasonDetails(id:any, seasonNumber:any) {
    this.service.getTvSeasonDetails(id, seasonNumber).subscribe((result) => {
      console.log(result)
      this.tvSeasonDetails = result;
    })
  }

  
}
