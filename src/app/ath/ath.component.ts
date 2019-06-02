import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {Router} from '@angular/router';
import {GestionATHService} from '../services/ATH/gestion-ath.service';

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

  constructor(private authService: AuthentificationService, private router: Router, private athService: GestionATHService) {
  }

  ngOnInit() {
    this.authenticated = this.authService.isAuthenticated();
  }

  onAuthenticated() {
    this.router.navigateByUrl('Client/Conexion');
  }

  onAllAth() {
    this.athService.AllAth().subscribe(data => {
      this.aths = data;
      this.nbr = 'A';
      console.log('' + this.nbr);
    }, err => {
      console.log('error de chargement de liste Ath');
    });
  }

  onAllDepannage() {
    this.athService.AllDepnnage().subscribe(data => {
      this.nbr = 'B';
      this.depannages = data;
      console.log('' + this.nbr);
    }, err => {
      console.log('error de chargement de liste Ath');
    });
  }

  onAllFichier() {
    this.athService.AllFichier().subscribe(data => {
      this.fichiers = data;
      this.nbr = 'C';
      console.log('' + this.nbr);
    }, err => {
      console.log('error');
    });
  }

  onGetAth(id) {
    this.athService.getAthById(id).subscribe(data => {
      this.athObj = data;
    }, err => {
      console.log('error de chargement athObj');
    });
  }

  onGetDepannage(id) {
    this.athService.getDepanngeId(id).subscribe(data => {
      this.depannage = data;
    }, err => {
      console.log('error');
    });
  }


  onGetFichier(id) {
    this.athService.getFichierById(id).subscribe(data => {
      this.fichier = data;
    }, err => {
      console.log('error de chargement de fichier');
    });
  }
}
