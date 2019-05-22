import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionVoitureService {
  host: string = 'http://localhost:8099/master_Auto/voitures';

  constructor(private http: HttpClient) {
  }

  saveVoiture(marque, model, categorie, carburant) {

    this.http.get(this.host + '/marque/' + marque + '/model/' + model + '/categorie/' + categorie + '/caraburant/' + carburant).subscribe(resp => {
      console.log('enregistrement de la voiture ok 2');
    }), err => {
      console.log('error de lancer la requete');
    };

  }
}
