import {Component, OnInit} from '@angular/core';
import {GestionTuningService} from '../services/tuning/gestion-tuning.service';
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {
  tunings;
  i = 0;
  private editPhoto: boolean;
  private currentPhoto;
  private selectedFilles;
  private progresse;
  private currentFileUpload;

  constructor(private tuningService: GestionTuningService) {
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

  onStyle() {
    if (this.i === 0) {
      this.i++;
      return this.i;
    } else if (this.i === 1) {
      this.i--;
      return this.i;
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
      if (event.type == HttpEventType.UploadProgress) {
        this.progresse = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('données sont chargés avec succés');
      }
    }, err => {
      alert("error de chargement de l'image, merci d'essayer");
    });
  }
}
