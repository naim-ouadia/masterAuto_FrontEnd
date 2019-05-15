import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {InfosService} from '../services/client/infos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user;

  constructor(private authService: AuthentificationService, private infos: InfosService) {
  }

  ngOnInit() {
    this.onGetUser();
  }

  isAuthenticated() {

    return this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.logOut();
  }

  onGetUser() {
    this.infos.getUser().subscribe(data => {
      this.user = data;
    }), err => {
      console.log('error');
    };
  }
}
