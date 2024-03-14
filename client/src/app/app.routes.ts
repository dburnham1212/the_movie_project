import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { TvDetailsComponent } from './pages/tv-details/tv-details.component';
import { TvSeasonDetailsComponent } from './pages/tv-season-details/tv-season-details.component';
import { TvEpisodeDetailsComponent } from './pages/tv-episode-details/tv-episode-details.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'movie/:id', component:MovieDetailsComponent, pathMatch: "full"},
  {path: 'person/:id', component:PersonDetailsComponent},
  {path: 'tv/:id', component:TvDetailsComponent},
  {path: 'tv/:id/season/:season_number', component:TvSeasonDetailsComponent},
  {path: 'tv/:id/season/:season_number/episode/:episode_number', component:TvEpisodeDetailsComponent}
];
