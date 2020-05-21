import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Genre } from '../movie/model/genre';
import { genres } from '../data';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genreForm: FormGroup = this.fb.group({
    id: [''],
    name: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.genreForm.patchValue(genres[2]);
  }

}
