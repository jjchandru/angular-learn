import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditMovieReactiveComponent } from './edit-movie-reactive/edit-movie-reactive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GenresComponent } from './genres/genres.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'edit-movie/:id', component: EditMovieComponent },
  { path: 'edit-movie-reactive/:id', component: EditMovieReactiveComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
