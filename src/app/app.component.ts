import { Component, VERSION } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  movieData : any = []
  constructor(public movieService : MoviesService) {}

  ngOnInit()
  {
    this.movieService.getPopularMovies().subscribe(response => {
      this.movieData = response['results']
      console.log(this.movieData)
    })
  }
}
