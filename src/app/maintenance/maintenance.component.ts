import {Component, OnInit} from '@angular/core';
import {MecaniqueService} from '../services/maintenance/mecanique.service';
import {DiagnosticService} from '../services/maintenance/diagnostic.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private mecaniqueService: MecaniqueService, private diagnosticService: DiagnosticService) {
  }

  mecaniques;
  diagnostics;

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

}
