import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './model/movie';
import { movies } from '../constants';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //movie: Movie = movies[3];
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
