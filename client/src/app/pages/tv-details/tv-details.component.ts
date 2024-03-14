import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CastDetailsComponent } from '../../components/cast-details/cast-details.component';
import { ReviewDetailsComponent } from '../../components/review-details/review-details.component';
import { RecommendationDetailsComponent } from '../../components/recommendation-details/recommendation-details.component';
import { VideoDisplayComponent } from '../../components/video-display/video-display.component';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    CastDetailsComponent, 
    ReviewDetailsComponent, 
    RecommendationDetailsComponent,
    VideoDisplayComponent
  ],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.sass'
})
export class TvDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private sanitizer: DomSanitizer) {
    router.params.subscribe((routeParams) => {
      //console.log(val)
      this.tvId = routeParams['id'];
      this.fetchTvInfo(this.tvId)
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    })
  }

  tvId:any;
  tvDetails:any;
  tvVideoDetails:any;
  tvDetailsCast:any;
  tvReviews:any;
  tvRecommendations:any;
  similarTv: any;

  ngOnInit(): void {
  }

  fetchTvInfo(id: any) {
    this.getTvDetails(id);
    this.getTvVideos(id);
    this.getTvCredits(id);
    this.getTvReviews(id);
    this.getTvRecommendations(id);
    this.getSimilarTv(id);
  }

  getTvDetails(id:any) {
    this.service.getTvDetails(id).subscribe((result) => {
      console.log(result)
      this.tvDetails = result;
    })
  }

  getTvVideos(id:any) {
    this.service.getTvVideos(id).subscribe((result) => {
      let filteredTvVideoDetails:any = result.results.filter((video:any) => {
        return video.site==='YouTube' && (video.type==='Trailer' || video.type==='Teaser')
      })
      console.log(filteredTvVideoDetails);
      this.tvVideoDetails = filteredTvVideoDetails;
    })
  }
  
  getSanitizedYTVideoUrl(key:string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }

  getTvRecommendations(id: any) {
    this.service.getTvRecommentations(id).subscribe((result) => {
      console.log("recommendations", result)
      this.tvRecommendations = result.results;
    })
  }

  getSimilarTv(id: any) {
    this.service.getSimilarTv(id).subscribe((result) => {
      console.log("similar", result)
      this.similarTv = result.results;
    })
  }

  getTvReviews(id: any) {
    try{
      this.service.getTvReviews(id).subscribe((result) => {
        this.tvReviews = result.results
      })
    } catch(err) {
      console.log(err)
    }
  }

  getTvCredits(id: any) {
    try{
      this.service.getTvCredits(id).subscribe((result) => {
        this.tvDetailsCast = result.cast
      })
    } catch (err) {
      console.log(err);
    }
  }
}
