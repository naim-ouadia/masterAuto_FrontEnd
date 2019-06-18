import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services/client/authentification.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: AuthentificationService) {
  }

  private errorMessage;

  ngOnInit() {
  }

  onLogin(data) {
    this.authService.login(data);
    this.errorMessage = this.authService.errorAuth;
  }


}
