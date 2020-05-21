import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUser().subscribe(
      data => {
        console.log("Component: Before reading data.");
        this.user = data.data;
        console.log("Compoent: After reading data.");
      }
    );
    console.log("ngOnInit execution completed.");
  }

  onSubmit() {
    console.log(JSON.stringify(this.user));
  }

}
