import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services/client/authentification.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        let jwt = resp.headers.get('Authorization');
        console.log(jwt);
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('Accueil');
      }, err => {
        console.log(err);
      });

  }


}
