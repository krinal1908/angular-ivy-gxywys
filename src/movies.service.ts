import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    const urlPopular =
      'https://api.themoviedb.org/3/movie/popular?api_key=a4b35e5c05c9add19ba465a334ce6f5d';
    return this.http.get(urlPopular);
  }

  searchMovies(query: any) {
    const urlSearch =
      'https://api.themoviedb.org/3/search/movie?api_key=a4b35e5c05c9add19ba465a334ce6f5d&language=en-US&query=' +
      query;
    return this.http.get(urlSearch);
  }
}
