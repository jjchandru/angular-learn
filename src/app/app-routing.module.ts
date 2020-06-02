import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditMovieReactiveComponent } from './edit-movie-reactive/edit-movie-reactive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GenresComponent } from './genres/genres.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent, canActivate: [AuthGuard] },
  { path: 'edit-movie/:id', component: EditMovieComponent, canActivate: [AuthGuard] },
  { path: 'genres', component: GenresComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'http', component: HttpComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
