import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { MovieSliderComponent } from '../../components/movie-slider/movie-slider.component';
import { CommonModule } from '@angular/common';
import { TvSliderComponent } from '../../components/tv-slider/tv-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TvSliderComponent,
    MovieSliderComponent, 
    CarouselComponent, 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  constructor(private service:MovieApiServiceService) {

  }

  bannerResult:any = [];
  selectedMediaType = 'movies';

  trendingMovieResult:any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scifiMovieResult:any = [];
  thrillerMovieResult:any = [];

  trendingTvResult: any = [];
  animationTvResult:any = [];
  comedyTvResult:any = [];
  documentaryTvResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    
    // Get data for different movie genres
    this.trendingMovieData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentaryMovieData();
    this.scifiMovieData();
    this.thrillerMovieData();

    // Get data for different tv genres
    this.trendingTvData();
    this.animationTvData();
    this.comedyTvData();
    this.documentaryTvData();
  }

  //bannerdata
  bannerData () {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    })
  }

  
  onSelectedMediaType(value:string) {
    console.log(value);
    this.selectedMediaType = value 
  }
  
  // Get movie data for different movie types
  // Get trending movie data
  trendingMovieData()
  {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    })
  }

  // Get action movie data
  actionMovieData()
  {
    this.service.getMovieDataByGenreId("28").subscribe((result) => {
      this.actionMovieResult = result.results;
    })
  }

  adventureMovieData() 
  {
    this.service.getMovieDataByGenreId("12").subscribe((result) => {
      this.adventureMovieResult = result.results;
    })
  }

  animationMovieData() 
  {
    this.service.getMovieDataByGenreId("16").subscribe((result) => {
      this.animationMovieResult = result.results;
    })
  }

  comedyMovieData() 
  {
    this.service.getMovieDataByGenreId("35").subscribe((result) => {
      this.comedyMovieResult = result.results;
    })
  }

  documentaryMovieData() 
  {
    this.service.getMovieDataByGenreId("99").subscribe((result) => {
      this.documentaryMovieResult = result.results;
    })
  }

  scifiMovieData() 
  {
    this.service.getMovieDataByGenreId("878").subscribe((result) => {
      this.scifiMovieResult = result.results;
    })
  }

  thrillerMovieData() 
  {
    this.service.getMovieDataByGenreId("53").subscribe((result) => {
      this.thrillerMovieResult = result.results;
    })
  }    
  
  // Get tv data for different movie types
  trendingTvData()
  {
    this.service.trendingTvApiData().subscribe((result) => {
      this.trendingTvResult = result.results;
    })
  }

  animationTvData() 
  {
    this.service.getTvDataByGenreId("16").subscribe((result) => {
      console.log(result)
      this.animationTvResult = result.results;
    })
  }

  comedyTvData() 
  {
    this.service.getTvDataByGenreId("35").subscribe((result) => {
      this.comedyTvResult = result.results;
    })
  }

  documentaryTvData() 
  {
    this.service.getTvDataByGenreId("99").subscribe((result) => {
      this.documentaryTvResult = result.results;
    })
  }
}
