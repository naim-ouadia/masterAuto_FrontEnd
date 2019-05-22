import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user1;

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit() {
  }

  isAuthenticated() {
    this.user1 = this.authService.user;
    return this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.logOut();
  }

}
