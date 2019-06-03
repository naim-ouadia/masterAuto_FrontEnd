import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {Router} from '@angular/router';
import {GestionATHService} from '../services/ATH/gestion-ath.service';
import {GestionContactService} from '../services/contact/gestion-contact.service';

@Component({
  selector: 'app-ath',
  templateUrl: './ath.component.html',
  styleUrls: ['./ath.component.css']
})
export class ATHComponent implements OnInit {

  private authenticated;
  private aths;
  private athObj;
  private depannages;
  private depannage;
  private fichiers;
  private fichier;
  private nbr: string;
  private nbr2: string;
  private contacts;

  constructor(private authService: AuthentificationService, private router: Router, private athService: GestionATHService, private contactService: GestionContactService) {
  }

  ngOnInit() {
    this.nbr = 'A';
    this.authenticated = this.authService.isAuthenticated();
    this.onGetAllContact();
  }

  onAuthenticated() {
    this.router.navigateByUrl('Client/Conexion');
  }

  onAllAth() {
    this.athService.AllAth().subscribe(data => {
      this.aths = data;
      this.nbr = 'A';
    }, err => {
      console.log('error de chargement de liste Ath');
    });
  }

  onAllDepannage() {
    this.athService.AllDepnnage().subscribe(data => {
      this.nbr = 'B';
      this.depannages = data;
    }, err => {
      console.log('error de chargement de liste Ath');
    });
  }

  onAllFichier() {
    this.athService.AllFichier().subscribe(data => {
      this.fichiers = data;
      this.nbr = 'C';
    }, err => {
      console.log('error');
    });
  }

  onGetAth(id) {
    this.athService.getAthById(id).subscribe(data => {
      this.athObj = data;
      this.nbr2 = 'AA';
    }, err => {
      console.log('error de chargement athObj');
    });
  }

  onGetDepannage(id) {
    this.athService.getDepanngeId(id).subscribe(data => {
      this.depannage = data;
      this.nbr2 = 'BB';
    }, err => {
      console.log('error');
    });
  }


  onGetFichier(id) {
    this.athService.getFichierById(id).subscribe(data => {
      this.fichier = data;
      this.nbr2 = 'CC';
    }, err => {
      console.log('error de chargement de fichier');
    });
  }

  onGetAllContact() {
    this.contactService.getAllContact().subscribe(data => {
      this.contacts = data;
    }, err => {
      console.log('error');
    });
  }

  onRemoveFichier(id) {
    console.log('test');
    this.athService.removeFichier(id).subscribe(resp => {
      this.onAllFichier();
    }, err => {
      console.log('error');
    });
  }
}
