import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {InfosService} from '../services/client/infos.service';

@Component({
  selector: 'app-parametres-compte',
  templateUrl: './parametres-compte.component.html',
  styleUrls: ['./parametres-compte.component.css']
})
export class ParametresCompteComponent implements OnInit {
  private user;

  constructor(private authService: AuthentificationService, private infosCompteService: InfosService) {
  }

  ngOnInit() {
    this.onGetUser();
  }

  onGetUser() {
    this.user = this.authService.user;
  }

  onUpDateUser(data) {
    this.infosCompteService.updateUser(this.user.id, data).subscribe(resp => {
    }, err => {
      console.log('error');
    });
  }

}
