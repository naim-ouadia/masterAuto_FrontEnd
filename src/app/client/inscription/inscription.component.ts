import {Component, OnInit} from '@angular/core';
import {RegisterClientService} from '../../services/client/register-client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  private errorMessage: boolean;
  private errorPassword: boolean;

  constructor(private registerClientService: RegisterClientService) {
  }

  ngOnInit() {
  }

  onRegister(data) {
    if (data.nom === '' || data.adresseMail === '' || data.numTel === '' || data.prenom === '' || data.adressePostale === '' || data.password === '' || data.passwordConfirmed === '') {
      this.errorMessage = true;
    } else if (data.password !== data.passwordConfirmed) {
      this.errorPassword = true;
    } else {
      this.registerClientService.registerClient(data);
    }
  }

}
