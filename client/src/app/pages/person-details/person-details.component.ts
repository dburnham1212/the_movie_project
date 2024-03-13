import { Component } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.sass'
})
export class PersonDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {

  }

  personDetails:any
  personCreditsMovieCast:any
  personCreditsTVCast:any

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getPersonDetails(getParamId);
    this.getPersonMovieCredits(getParamId);
    this.getPersonTVCredits(getParamId);
  }

  getPersonDetails(id:any) {
    this.service.getPersonDetails(id).subscribe((result) => {
      console.log(result)
      this.personDetails=result;
    })
  }

  getPersonMovieCredits(id:any) {
    this.service.getPersonMovieCredits(id).subscribe((result) => {
      console.log(result)
      this.personCreditsMovieCast=result.cast;
    })
  }

  getPersonTVCredits(id:any) {
    this.service.getPersonTVCredits(id).subscribe((result) => {
      console.log(result)
      this.personCreditsTVCast=result.cast;
    })
  }

  getFullDateString(date: string) {
    const dateToCheck = new Date(date);
    return new Date(dateToCheck.getTime() + Math.abs(dateToCheck.getTimezoneOffset() * 60000)).toDateString();
  }
}
