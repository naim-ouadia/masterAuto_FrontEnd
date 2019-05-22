import {Component, OnInit} from '@angular/core';
import {MecaniqueService} from '../services/maintenance/mecanique.service';
import {DiagnosticService} from '../services/maintenance/diagnostic.service';
import {AuthentificationService} from '../services/client/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private mecaniqueService: MecaniqueService, private diagnosticService: DiagnosticService, private authService: AuthentificationService,
              private router: Router) {
  }

  mecaniques;
  diagnostics;
  currentMecanique;

  ngOnInit() {
    this.onAllMecanique();
    this.onAllDiagnostic();
  }

  onAllMecanique() {
    this.mecaniqueService.getAllMecanique().subscribe(data => {
      this.mecaniques = data;
    }),
      err => {
        console.log('error de chargement de la list');
      };
  }

  onAllDiagnostic() {
    this.diagnosticService.getAllDiagnostic().subscribe(data => {
      this.diagnostics = data;
    }),
      err => {
        console.log('error de chargement de la list');
      };
  }

  onAuthenticated() {
    if (this.authService.isAuthenticated() == null) {
      this.router.navigateByUrl('Client/Conexion');
    } else {
      this.router.navigateByUrl('Rdv');
    }

  }

  onisAdmin() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    }
  }

  onDeleteMecanique(id) {
    let c = confirm('Confirmer pour supprimer');
    if (!c) return;
    this.mecaniqueService.deleteMecanique(id).subscribe(data => {
      this.onAllMecanique();
    }, erro => {
      console.log('error' + erro);
    });
  }

  onDeleteDiagnistic(id) {
    let c = confirm('Confirmer pour supprimer');
    if (!c) return;
    this.diagnosticService.deleteDiagnostic(id).subscribe(data => {
      this.onAllDiagnostic();
    }, err => {
      console.log('error' + err);
    });
  }

  onSaveMecanique(data) {
    this.mecaniqueService.saveMecanique(data).subscribe(resp => {
      this.onAllMecanique();
    }, err => {
      console.log('error');
    });
  }

  onSaveDiagnostic(data) {
    this.diagnosticService.saveDiagnostic(data).subscribe(resp => {
      this.onAllDiagnostic();
    }, err => {
      console.log('error');
    });
  }

  ongetElement(id) {
    this.mecaniqueService.getElement(id).subscribe(data => {
      this.currentMecanique = data;
    }, err => {
      console.log('error');
    });
  }

  onUpdatElement(data) {
    this.mecaniqueService.updateElement(this.currentMecanique.id, data).subscribe(data => {
      this.onAllMecanique();
    }, err => {
      console.log('error');
    });
  }


}
