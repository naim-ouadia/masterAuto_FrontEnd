import {Component, OnInit} from '@angular/core';
import {GestionRdvService} from '../services/Rdv/gestion-rdv.service';


@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  constructor(private rdvService: GestionRdvService) {
  }

  marques;
  models;
  categories;
  carburants;
  dateDuJour: Date;
  i;
  heure: string;

  dates: Array<Date> = [];
  public commentaire: string = '';


  ngOnInit() {

    this.onDateRdv();
    this.onGetAllMarque();
    this.onGetAllModel();
    this.onGetAllCategorie();
    this.onGetAllTypeCarburant();
  }

  onGetAllMarque() {
    this.rdvService.getAllMarque().subscribe(data => {
      this.marques = data;
    }), err => {
      console.log('error de charger la liste des marques ');
    };
  }

  onGetAllCategorie() {
    this.rdvService.getAllCategorie().subscribe(data => {
      this.categories = data;
    }), err => {
      console.log('error de charger la liste des catagorie');
    };
  }

  onGetAllModel() {
    this.rdvService.getAllModel().subscribe(data => {
      this.models = data;
    }), err => {
      console.log('error de charger la liste des models');
    };
  }

  onGetAllTypeCarburant() {
    this.rdvService.getAllTypeCarburant().subscribe(data => {
      this.carburants = data;
    }), err => {
      console.log('error de charger la liste des carburants');
    };
  }

  onDateRdv() {
    for (this.i = 0; this.i < 6; this.i++) {
      this.dateDuJour = new Date();
      this.dateDuJour.setDate(this.dateDuJour.getDate() + this.i);
      this.dates.push(this.dateDuJour);
    }
  }

  onAjouterDate(data) {

    this.rdvService.saveDate(data.replace(/[/]/g, '-'));
  }

  onSave() {
    this.rdvService.saveRdv(this.commentaire);
  }


}
