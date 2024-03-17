import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {
  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {

  }

  searchResult:any;

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm()
  {
    console.log(this.searchForm.value)
    this.service.getSearchData(this.searchForm.value).subscribe((result) => {
      console.log(result);
      this.searchResult = result.results;
    });
  }
}
