import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CastDetailsComponent } from '../../components/cast-details/cast-details.component';
import { VideoDisplayComponent } from '../../components/video-display/video-display.component';

@Component({
  selector: 'app-tv-episode-details',
  standalone: true,
  imports: [
    CommonModule, 
    CastDetailsComponent,
    VideoDisplayComponent
  ],
  templateUrl: './tv-episode-details.component.html',
  styleUrl: './tv-episode-details.component.sass'
})
export class TvEpisodeDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {

  }

  tvDetails: any;
  episodeDetails: any;
  episodeCredits: any;
  episodeVideos: any;

  ngOnInit() {
    let getParamId = this.router.snapshot.paramMap.get('id');
    let seasonNumber = this.router.snapshot.paramMap.get('season_number');
    let episodeNumber = this.router.snapshot.paramMap.get('episode_number');
    console.log(getParamId, seasonNumber, episodeNumber);
    this.getTvDetails(getParamId);
    this.getEpisodeDetails(getParamId, seasonNumber, episodeNumber);
    this.getTvEpisodeCredits(getParamId, seasonNumber, episodeNumber);
    this.getTvEpisodeVideos(getParamId, seasonNumber, episodeNumber)
  }

  getTvDetails(id: string | null) {
    this.service.getTvDetails(id).subscribe((result) => {
      this.tvDetails=result;
    })
  }

  getEpisodeDetails(id: string | null, seasonNumber: string | null, episodeNumber: string | null) {
    this.service.getTvEpisodeDetails(id, seasonNumber, episodeNumber).subscribe((result) => {
      this.episodeDetails = result;
    })
  }

  getTvEpisodeCredits(id: string | null, seasonNumber: string | null, episodeNumber: string | null) {
    this.service.getTvEpisodeCredits(id, seasonNumber, episodeNumber).subscribe((result) => {
      console.log(result)
      this.episodeCredits = result.cast;
    })
  }

  getTvEpisodeVideos(id: string | null, seasonNumber: string | null, episodeNumber: string | null) {
    this.service.getTvEpisodeVideos(id, seasonNumber, episodeNumber).subscribe((result) => {
      let filteredTvVideoDetails:any = result.results.filter((video:any) => {
        return video.site==='YouTube'
      })
      this.episodeVideos = filteredTvVideoDetails;
    })
  }
}
