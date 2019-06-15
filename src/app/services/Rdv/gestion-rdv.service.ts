import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {InfosService} from '../client/infos.service';


@Injectable({
  providedIn: 'root'
})
export class GestionRdvService {

  private user;
  private date;

  constructor(private http: HttpClient, private infosClienService: InfosService) {
  }

  private host: string = 'http://localhost:8099/master_Auto';

  getAllMarque() {
    return this.http.get(this.host + '/marques/AllMarque');
  }

  getAllCategorie() {
    return this.http.get(this.host + '/categories/AllCategorie');
  }

  getAllModel() {
    return this.http.get(this.host + '/models/AllModel');
  }

  getAllTypeCarburant() {
    return this.http.get(this.host + '/typeCarburant/AllTypeCarburant');
  }

  saveDate(data) {
    this.date = data;
  }

  saveRdv(idUser, idVoiture, commenataire) {

    this.http.get(this.host + '/Rdvs/id/' + idUser + '/id/' + idVoiture + '/date/' + this.date + '/com/' + commenataire
    ).subscribe(resp => {
      console.log('enregistrement ok ');
    }), err => {
      console.log('error de save RDV');
    };
  }

  getRdvClient(id) {
    return this.http.get(this.host + '/Rdvs/listRdvsCient/' + id);
  }

}
