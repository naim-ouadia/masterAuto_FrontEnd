import {Component, OnInit} from '@angular/core';
import {GestionTuningService} from '../services/tuning/gestion-tuning.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../services/client/authentification.service';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {
  private tunings;
  private i = 0;
  private editPhoto: boolean;
  private currentPhoto;
  private selectedFilles;
  private progresse;
  private currentFileUpload;
  private tuning;

  constructor(private tuningService: GestionTuningService, private authService: AuthentificationService) {
  }

  ngOnInit() {
    this.i = 0;
    this.onGetAllTuning();
  }

  onGetAllTuning() {
    this.tuningService.getAllTuning().subscribe(data => {
      this.tunings = data;
    }, err => {
      console.log('error de chargement de liste');
    });
  }

  onisAdmin() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    }
  }

  onEditPhoto(data) {
    this.editPhoto = true;
    this.currentPhoto = data;
  }

  onSelectedFile(event) {
    this.selectedFilles = event.target.files;
  }

  uploadPhoto() {
    this.progresse = 0;
    this.currentFileUpload = this.selectedFilles.item(0);
    this.tuningService.upLoadData(this.currentFileUpload, this.currentPhoto.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progresse = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('données sont chargés avec succés');
      }
    }, err => {
      alert("error de chargement de l'image, merci d'essayer");
    });
  }

  onGetTuning(id) {
    this.tuningService.getTuning(id).subscribe(data => {
      this.tuning = data;
    }, err => {
      console.log('error de trouver le tuning by id');
    });
  }

  onUpdateTuning(data) {
    this.tuningService.updateTuning(this.tuning.id, data).subscribe(resp => {
      this.onGetAllTuning();
    }, err => {
      console.log('error');
    });
  }

  onDeleteTuning(id) {
    let c = confirm('Confirmer pour supprimer');
    if (!c) return;
    this.tuningService.deleteTuning(id).subscribe(data => {
      this.onGetAllTuning();
    }, err => {
      console.log('error');
    });
  }

  onAddTuning(data) {
    this.tuningService.addTuning(data).subscribe(resp => {
      this.onGetAllTuning();
    }, erro => {
      console.log('error');
    });
  }

}
