import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/client/authentification.service';
import {Router} from '@angular/router';
import {GestionATHService} from '../services/ATH/gestion-ath.service';
import {GestionContactService} from '../services/contact/gestion-contact.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

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
  private contact;
  private selectedFilles;
  private progresse;
  private currentFileUpload;
  private currentFichier;


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

  onAddAth(data) {
    this.athService.addAth(data).subscribe(resp => {
      this.onAllAth();
    }, erro => {
      console.log('error ');
    });
  }

  onUpdateAth(data) {
    this.athService.updateAth(this.athObj.id, data).subscribe(resp => {
      this.onAllAth();
    }, err => {
      console.log('error');
    });
  }

  onDeleteAth(id) {
    this.athService.deleteAth(id).subscribe(resp => {
      this.onAllAth();
      this.nbr2 = 'D';
    }, err => {
      console.log('error');
    });
  }

  onAddDepannage(data) {
    this.athService.addDepannage(data).subscribe(rep => {
      this.onAllDepannage();
    }, err => {
      console.log('error');
    });
  }

  onUpdateDepannage(data) {
    this.athService.upDateDepannage(this.depannage.id, data).subscribe(esp => {
      this.onAllDepannage();
    }, err => {
      console.log('error');
    });
  }

  onDeleteDepannge(id) {
    this.athService.deleteDepannage(id).subscribe(resp => {
      this.onAllDepannage();
      this.nbr2 = 'D';
    }, err => {
      console.log('error');
    });
  }

  onAddFichierTechnique(data) {
    this.athService.addFichier(data).subscribe(resp => {
      this.currentFichier = resp;
      this.uploadFichiterTechnique();
      this.onAllFichier();
    }, err => {
      console.log('error');
    });
  }

  onUpdateFichierTechnique(data) {
    this.athService.upDateFichier(this.currentFichier.id, data).subscribe(resp => {
      this.onAllFichier();
    }, err => {
      console.log('error 1');
    });
  }

  onSelectedFileTech(event) {
    this.selectedFilles = event.target.files;
  }

  uploadFichiterTechnique() {
    this.progresse = 0;
    this.currentFileUpload = this.selectedFilles.item(0);
    this.athService.upLoadData(this.currentFileUpload, this.currentFichier.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progresse = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('données sont chargés avec succés');
      }
    }, err => {
      alert("error de chargement de du fichier, merci d'essayer");
    });
  }

  onRemoveFichier(id) {
    this.athService.removeFichier(id).subscribe(resp => {
      this.onAllFichier();
    }, err => {
      console.log('error');
    });
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
      this.currentFichier = data;
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

  onAddContact(data) {
    this.contactService.addContact(data).subscribe(resp => {
      this.onGetAllContact();
    }, err => {
      console.log('error');
    });
  }

  onGetContact(id) {
    this.contactService.getContactById(id).subscribe(resp => {
      this.contact = resp;
    }, err => {
      console.log('error');
    });
  }

  onUpdateContact(data) {
    this.contactService.updateContact(this.contact.id, data).subscribe(resp => {
      this.onGetAllContact();
    }, err => {
      console.log('error');
    });
  }

  onDeleteContact(id) {
    this.contactService.deleteContact(id).subscribe(resp => {
      this.onGetAllContact();
    }, err => {
      console.log('error');
    });
  }

}
