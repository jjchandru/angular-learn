import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditMovieReactiveComponent } from './edit-movie-reactive/edit-movie-reactive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GenresComponent } from './genres/genres.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    EditMovieComponent,
    EditMovieReactiveComponent,
    ReactiveComponent,
    GenresComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
