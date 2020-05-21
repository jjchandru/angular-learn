import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/model/movie';
import { movies } from '../data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = movies;
  searchKey: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  findMovie() {
    if (this.searchKey == "") {
      this.movies = movies;
      return;
    }
    this.movies = [];
    for (let i = 0; i < movies.length; i++) {
      let title = movies[i].title.toUpperCase();
      let searchKeyUpper = this.searchKey.toUpperCase();
      if (title.includes(searchKeyUpper)) {
        this.movies.push(movies[i]);
      }
    }
  }

  toggleFavorite() {
    console.log("toggleFavorite() called");
  }

}

