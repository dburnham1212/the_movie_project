import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { 

  }

  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'c6734eed6383a44e67677db3d4802fee';
  
  bannerapi = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
  trendingMovieApi = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
  trendingTvApi = `${this.baseUrl}/trending/tv/day?api_key=${this.apiKey}`
  actionMovieApi = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`
  
  // bannerapidata
  bannerApiData():Observable<any>
  {
    return this.http.get(this.bannerapi);
  }

  // trending movie api data
  trendingMovieApiData():Observable<any>
  {
    return this.http.get(this.trendingMovieApi)
  }

  trendingTvApiData():Observable<any>
  {
    return this.http.get(this.trendingTvApi);
  }

  // get movie data by a specific genre id
  getMovieDataByGenreId(genre: string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genre}`)
  }

  // get movie tv by a specific genre id
  getTvDataByGenreId(genre: string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&with_genres=${genre}`)
  }

  // search movie data
  getSearchMovie(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  // get movie data
  getMovieVideo(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  getMovieRecommentations(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`)
  }

  getMovieReviews(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`)
  }
  
  // get movie cast
  getMovieCast(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  getSimilarMovies(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  // get person details
  getPersonDetails(data: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/person/${data}?api_key=${this.apiKey}`)
  }  

  // get person movie credits
  getPersonMovieCredits(data: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/person/${data}/movie_credits?api_key=${this.apiKey}`)
  }

  // get person movie credits
  getPersonTVCredits(data: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/person/${data}/tv_credits?api_key=${this.apiKey}`)
  }

  // Get Different TV Details
  getTvDetails(data: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${data}?api_key=${this.apiKey}`);
  }

  getTvCredits(id: any): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getTvReviews(id: any): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/reviews?api_key=${this.apiKey}`)
  }

  getTvVideos(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
  }

  getTvRecommentations(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/recommendations?api_key=${this.apiKey}`)
  }

  getSimilarTv(id: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
  }

  // Get tv season details
  getTvSeasonDetails(id: any, seasonNumber: any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}?api_key=${this.apiKey}`)
  }

  getTvSeasonVideos(id: any, seasonNumber: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}/videos?api_key=${this.apiKey}`)
  }

  getTvSeasonCredits(id: any, seasonNumber: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}/credits?api_key=${this.apiKey}`)
  }

  getTvEpisodeDetails(id: any, seasonNumber: any, episodeNumber: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${this.apiKey}`)
  }

  getTvEpisodeCredits(id: any, seasonNumber: any, episodeNumber: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/credits?api_key=${this.apiKey}`)
  }

  getTvEpisodeVideos(id: any, seasonNumber: any, episodeNumber: any):Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/videos?api_key=${this.apiKey}`)
  }
}
