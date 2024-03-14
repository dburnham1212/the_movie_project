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
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    CastDetailsComponent, 
    ReviewDetailsComponent, 
    RecommendationDetailsComponent,
    VideoDisplayComponent
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.sass'
})
export class MovieDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private sanitizer: DomSanitizer) {
    router.params.subscribe((routeParams) => {
      //console.log(val)
      this.movieId = routeParams['id'];
      this.fetchMovieInfo(this.movieId)
      window.scroll({ 
        top: 0, 
        left: 0, 
      });
    })
  }
  movieId: any;
  movieResult:any
  movieVideoResult:any
  movieCastResult:any
  movieReviews: any
  movieRecommendations: any
  similarMovies: any;

  ngOnInit(): void {

  }

  fetchMovieInfo(id: any) {
    this.getMovie(id)
    this.getMovieVideos(id);
    this.getMovieReviews(id);
    this.getMovieReccomentations(id);
    this.getMovieCast(id);
    this.getSimilarMovies(id);
  }

  getMovie(id:any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result);
      this.movieResult = result;
    })
  }

  getYear(date:string) {
    return new Date(date).getFullYear();
  }

  getMovieVideos(id:any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      let filteredMovieVideoDetails:any = result.results.filter((video:any) => {
        return video.site==='YouTube' && (video.type==='Trailer' || video.type==='Teaser')
      })
      console.log(filteredMovieVideoDetails);
      this.movieVideoResult = filteredMovieVideoDetails;
    })
  }
  
  getMovieReviews(id: any) {
    this.service.getMovieReviews(id).subscribe((result) => {
      console.log(result)
      this.movieReviews = result.results
    })
  }

  getSimilarMovies(id: any) {
    this.service.getSimilarMovies(id).subscribe((result) => {
      this.similarMovies = result.results;
    })
  }

  getMovieReccomentations(id: any) {
    this.service.getMovieRecommentations(id).subscribe((result) => {
      console.log("recommendations", result);
      this.movieRecommendations = result.results;
    })
  }

  getMovieCast(id:any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result.cast)
      this.movieCastResult = result.cast
    })
  }
}
