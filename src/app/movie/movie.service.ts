import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './model/movie';
import { Genre } from './model/genre';
import { MpaaRating } from './model/mpaa-rating';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl: string = "http://localhost:8080/booking/api/movies";
  genresUrl: string = "http://localhost:8080/booking/api/genres";
  mpaaRatingsUrl: string = "http://localhost:8080/booking/api/mpaa-ratings";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.moviesUrl + "/" + id);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }

  getMpaaRatngs(): Observable<MpaaRating[]> {
    return this.http.get<MpaaRating[]>(this.mpaaRatingsUrl);
  }

  updateMovie(movie: Movie): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.put<any>(
      this.moviesUrl, 
      movie, 
      {headers: header}
    );    
  }
}
