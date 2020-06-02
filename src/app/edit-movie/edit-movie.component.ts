import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie/model/movie';
//import { movies } from '../data';
import { MpaaRating } from '../movie/model/mpaa-rating';
//import { mpaaRatings } from '../data';
import { Genre } from '../movie/model/genre';
import { genres } from '../data';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  
  movie: Movie;
  mpaaRatings: MpaaRating[];
  genres: Genre[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    /*for (let i: number = 0; i < movies.length; i++) {
      if (movies[i].id == parseInt(id)) {
        this.movie = movies[i];
      }
    }*/
    this.movieService.getMovie(parseInt(id)).subscribe(
      (data: Movie) => {
        this.movie = data
      }
    );

    this.movieService.getGenres().subscribe(
      (data: Genre[]) => {
        this.genres = data
        for (let i = 0; i < this.genres.length; i++) {
          for (let j = 0; j < this.movie.genres.length; j++) {
            if (this.genres[i].id == this.movie.genres[j].id) {
              this.genres[i].selected = true;
            }
          }
        }
      }
    );

    this.movieService.getMpaaRatngs().subscribe(
      (data: MpaaRating[]) => {
        this.mpaaRatings = data
      }
    );
  }

  mpaaRatingChanged(id: number) {
    console.log("MPAA Rating Id; " + id);
    //this.movie.mpaaRating.id = id;
  }

  genreChanged(id: number) {
    for (let i = 0; i < genres.length; i++) { //Change selected flag
      if (genres[i].id == id) {
        genres[i].selected = !genres[i].selected;
      }
    }
    // clear current genres of this movie and add items based on 
    // selected flag
    let selectedGenres: Genre[] = [];
    for (let i = 0; i < this.genres.length; i++) { 
      if (genres[i].selected) {
        selectedGenres.push(genres[i]);
      }
    }
    this.movie.genres = selectedGenres;
  }

  onSubmit() {
    //console.log(JSON.stringify(this.movie));
    //let json: string = JSON.stringify(this.movie);
    this.movieService.updateMovie(this.movie).subscribe(
      data => {
        this.router.navigate(['/movie-list']);
      }
    );
  }

}
