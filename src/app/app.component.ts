import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from './services/client/authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'master-auto';

  ngOnInit(): void {
    this.authService.loadToken();
  }

  constructor(private authService: AuthentificationService) {
  }



  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }


}

