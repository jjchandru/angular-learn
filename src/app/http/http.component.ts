import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  user = {
    name: "morpheus",
    job: "leader"
  };
  createResponse: any;
  updateResponse: any;
  deleteResponse: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  addUser() {
    let json: string = JSON.stringify(this.user);
    this.profileService.addUser(json).subscribe(
      data => {
        this.createResponse = data;
      }
    );
  }

  updateUser() {
    let json: string = JSON.stringify(this.user);
    this.profileService.updateUser(json).subscribe(
      data => {
        this.updateResponse = data;
      }
    );
  }

  deleteUser() {
    this.profileService.deleteUser().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.deleteResponse = data.status;
      }
    );
  }
}
