import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  private host: string = 'http://localhost:8099/master_Auto/users';
  jwt: string;
  adresseMail: string;


  constructor(private http: HttpClient) {
  }

  loadUser() {
    this.jwt = localStorage.getItem('token');
    let jwtHeler = new JwtHelperService();
    let objJwt = jwtHeler.decodeToken(this.jwt);
    return this.adresseMail = objJwt.sub;
  }

  getUser() {
    return this.http.get(this.host + '/adresseMail/' + this.loadUser());
  }
}
