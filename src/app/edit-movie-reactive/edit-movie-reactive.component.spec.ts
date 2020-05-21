import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieReactiveComponent } from './edit-movie-reactive.component';

describe('EditMovieReactiveComponent', () => {
  let component: EditMovieReactiveComponent;
  let fixture: ComponentFixture<EditMovieReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMovieReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
