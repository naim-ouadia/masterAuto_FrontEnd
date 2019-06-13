import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';

@Component({
  selector: 'app-parametres-compte',
  templateUrl: './parametres-compte.component.html',
  styleUrls: ['./parametres-compte.component.css']
})
export class ParametresCompteComponent implements OnInit {
  private user;

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit() {
    this.onGetUser();
  }

  onGetUser() {
    this.user = this.authService.user;
  }

}
