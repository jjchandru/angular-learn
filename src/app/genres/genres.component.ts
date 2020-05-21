import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Genre } from '../movie/model/genre';
import { genres } from '../data';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genresForm: FormGroup = this.fb.group({
    genres: this.fb.array([])
  });
  itemCount = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let items = this.genresForm.get('genres') as FormArray;
    this.itemCount = genres.length;
    for (let i = 0; i < genres.length; i++) {
      items.push(this.fb.group({
        id: genres[i].id,
        name: genres[i].name
      }));
    }
    console.log(JSON.stringify(this.genresForm.value));
  }

  get genres() {
    return this.genresForm.get('genres') as FormArray;
  }

  addGenre() {
    let items = this.genresForm.get('genres') as FormArray;
    let id = this.itemCount + 1;
    items.push(this.fb.group({
      id: id,
      name: ''
    }));
  }

  deleteGenre(index: number) {
    let items = this.genresForm.get('genres') as FormArray;
    items.removeAt(index);
  }

}
