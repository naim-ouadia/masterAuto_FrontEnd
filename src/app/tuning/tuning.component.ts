import {Component, OnInit} from '@angular/core';
import {GestionTuningService} from '../services/tuning/gestion-tuning.service';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {
  tunings;
  i = 0;

  constructor(private tuningService: GestionTuningService) {
  }

  ngOnInit() {
    this.onGetAllTuning();
  }

  onGetAllTuning() {
    this.tuningService.getAllTuning().subscribe(data => {
      this.tunings = data;
    }, err => {
      console.log('error de chargement de liste');
    });
  }

  onStyle() {
    if (this.i === 0) {
      this.i++;
      return this.i;
    } else if (this.i === 1) {
      this.i--;
      return this.i;
    }
  }
}
