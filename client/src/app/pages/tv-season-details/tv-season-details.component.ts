import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CastDetailsComponent } from '../../components/cast-details/cast-details.component';
import { VideoDisplayComponent } from '../../components/video-display/video-display.component';

@Component({
  selector: 'app-tv-season-details',
  standalone: true,
  imports: [
    CommonModule, 
    CastDetailsComponent, 
    RouterModule,
    VideoDisplayComponent
  ],
  templateUrl: './tv-season-details.component.html',
  styleUrl: './tv-season-details.component.sass'
})
export class TvSeasonDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {

  }

  tvDetails:any;
  tvSeasonDetails:any;
  tvSeasonCredits:any;
  tvSeasonVideos:any;
  seasonNumber:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.seasonNumber = this.router.snapshot.paramMap.get('season_number');
    this.getTvDetails(getParamId);
    this.getTvSeasonDetails(getParamId, this.seasonNumber);
    this.getTvSeasonCredits(getParamId, this.seasonNumber);
    this.getTvSeasonVideos(getParamId, this.seasonNumber);
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

  getTvSeasonCredits(id:any, seasonNumber:any) {
    this.service.getTvSeasonCredits(id, seasonNumber).subscribe((result) => {
      console.log(result);
      this.tvSeasonCredits = result.cast;
    })
  }

  getTvSeasonVideos(id:string | null, seasonNumber: string | null) {
    this.service.getTvSeasonVideos(id, seasonNumber).subscribe((result) => {
      let filteredTvSeasonVideoDetails:any = result.results.filter((video:any) => {
        return video.site==='YouTube' && (video.type==='Trailer' || video.type==='Teaser')
      })
      console.log(filteredTvSeasonVideoDetails);
      this.tvSeasonVideos = filteredTvSeasonVideoDetails;
    })
  }
}
