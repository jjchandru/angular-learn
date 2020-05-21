import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //movie: Movie = movies[0];
  //movies: Movie[] = movies;
  @Input() movie: Movie;
  @Output() favoriteSelected: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectFavorite() {
    this.favoriteSelected.emit(true);
    this.movie.favorite = !this.movie.favorite;
  }

  showEdit() {
    console.log("Inside showEdit()");
    this.router.navigate(['/edit-movie', this.movie.id]);
  }
}
