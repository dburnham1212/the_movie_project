import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.sass'
})
export class BrowseComponent {
  constructor(private service: MovieApiServiceService) {

  }

  selectedMediaType: string | null = 'movies';
  selectedGenres: any[] = [];
  selectedGenre: number | null = 0;
  selectedMovieData: any[] = [];
  selectedTvData: any[] = [];

  currentPage = 1;

  ngOnInit() {
    this.getMovieGenres();
  }

  onSelectedMediaType(value:string) {
    console.log(value);
    this.selectedMediaType = value;
    this.currentPage = 1;
    if(this.selectedMediaType === 'movies') {
      this.getMovieGenres();
    } else if(this.selectedMediaType === 'tv') {
      this.getTvGenres();
    }
  }

  onSelectedGenre(value:string) {
    console.log(value);
    this.selectedGenre = Number(value);
    this.currentPage = 1;
    if(this.selectedMediaType === 'movies') {
      this.service.getMovieDataByGenreIdAndPage("" + this.selectedGenre, this.currentPage).subscribe((result) => {
        console.log(result)
        this.selectedMovieData=result.results;
      })
    } else {
      this.service.getTvDataByGenreIdAndPage("" + this.selectedGenre, this.currentPage).subscribe((result) => {
        console.log(result)
        this.selectedTvData=result.results;
      })
    }
  }

  getMovieGenres() {
    this.service.getMovieGenres().subscribe((result) => {
      console.log(result)
      this.selectedGenres=result.genres;
      this.onSelectedGenre(this.selectedGenres[0].id)
    })
  }

  getMoreMovies() {
    this.currentPage ++;
    this.service.getMovieDataByGenreIdAndPage("" + this.selectedGenre, this.currentPage).subscribe((result) => {
      console.log(result)
      this.selectedMovieData=[...this.selectedMovieData, ...result.results];
    })
  }

  getTvGenres() {
    this.service.getTvGenres().subscribe((result) => {
      console.log(result)
      this.selectedGenres=result.genres;
      this.onSelectedGenre(this.selectedGenres[0].id)
    })
  }

  getMoreTv() {
    this.currentPage ++;
    this.service.getTvDataByGenreIdAndPage("" + this.selectedGenre, this.currentPage).subscribe((result) => {
      console.log(result)
      this.selectedTvData=[...this.selectedTvData, ...result.results];
    })
  }
}
