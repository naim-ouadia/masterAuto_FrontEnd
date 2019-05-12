import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  host: string = 'http://localhost:8099/master_Auto';

  constructor(private http: HttpClient) {
  }


  registerClient(data) {
    this.http.post(this.host + '/users/register', data).subscribe(resp => {
      console.log('enregistrement ok');
    }), err => {
      console.log("erreur d'enregister le client");
    };
  }
}
