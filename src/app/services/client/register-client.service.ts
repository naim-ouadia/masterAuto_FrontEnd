import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  host: string = 'http://localhost:8099/master_Auto';

  constructor(private http: HttpClient, private router: Router) {
  }


  registerClient(data) {
    this.http.post(this.host + '/users/register', data).subscribe(resp => {
      this.router.navigateByUrl('Accueil');
    }), err => {
      console.log('erreur de save le client');
    };
  }
}
