import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {InfosService} from '../services/client/infos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthentificationService) {
  }

  ngOnInit() {
  }

  isAuthenticated() {

    return this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.logOut();
  }


}
