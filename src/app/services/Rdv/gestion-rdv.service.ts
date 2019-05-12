import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionRdvService {

  constructor(private http: HttpClient) {
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

}
