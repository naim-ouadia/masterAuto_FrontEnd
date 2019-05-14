import {Component, OnInit} from '@angular/core';
import {RegisterClientService} from '../../services/client/register-client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  private pwd: string;
  private pwdConfirmed: string;

  constructor(private registerClientService: RegisterClientService) {
  }

  ngOnInit() {
  }

  onRegister(data) {
    this.registerClientService.registerClient(data);
  }



}
