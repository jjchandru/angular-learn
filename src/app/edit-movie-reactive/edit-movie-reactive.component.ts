import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie/model/movie';
import { movies } from '../data';
import { MpaaRating } from '../movie/model/mpaa-rating';
import { mpaaRatings } from '../data';
import { Genre } from '../movie/model/genre';
import { genres } from '../data';

@Component({
  selector: 'app-edit-movie-reactive',
  templateUrl: './edit-movie-reactive.component.html',
  styleUrls: ['./edit-movie-reactive.component.css']
})
export class EditMovieReactiveComponent implements OnInit {
  movie: Movie;
  mpaaRatings: MpaaRating[] = mpaaRatings;
  //genres: Genre[] = genres;
  genre: Genre = genres[1];

  genreForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  movieForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    mpaaRating: new FormGroup({
      id: new FormControl(''),
      name: new FormControl('')
    }),
    rating: new FormControl(''),
    duration: new FormControl(''),
    budget: new FormControl(''),
    releaseDate: new FormControl(''),
    bookingsOpen: new FormControl(''),
    favorite: new FormControl(''),
    genres: new FormArray([
      new FormGroup({
        id: new FormControl(''),
        name: new FormControl('')
      })
    ])
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    for (let i: number = 0; i < movies.length; i++) {
      if (movies[i].id == parseInt(id)) {
        this.movie = movies[i];
      }
    }
    this.movieForm.patchValue(this.movie);
    this.genreForm.patchValue(genres[2]);
  }

  get genres() {
    return this.movieForm.get('genres') as FormArray;
  }

}
