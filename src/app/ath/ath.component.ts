import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ath',
  templateUrl: './ath.component.html',
  styleUrls: ['./ath.component.css']
})
export class ATHComponent implements OnInit {

  private authenticated;

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
    this.authenticated = this.authService.isAuthenticated();
  }

  onAuthenticated() {
      this.router.navigateByUrl('Client/Conexion');
  }
}
