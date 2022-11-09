import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData : any = []
  constructor(public movieService : MoviesService) { }

  ngOnInit() {
  }

  search(event : any)
  {
    this.movieService.searchMovies(event.target.value).subscribe(Response => {
      this.searchData = Response['results']
    })
  }

}