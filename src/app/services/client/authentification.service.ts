import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  host2: string = 'http://localhost:8099';
  jwt: string;
  adresseMail: string;
  roles: Array<string>;


  constructor(private http: HttpClient) {
  }

  login(data) {
    return this.http.post(this.host2 + '/login', data, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJwt();
  }

  parseJwt() {

    let jwtHeler = new JwtHelperService();
    let objJwt = jwtHeler.decodeToken(this.jwt);
    this.adresseMail = objJwt.sub;
    this.roles = objJwt.roles;
  }


  loadToken() {
    if (this.jwt == null || this.jwt === undefined) {
      return null;
    } else {
      this.jwt = localStorage.getItem('token');
      this.parseJwt();
    }

  }

  isAdmin() {
    return this.roles.indexOf('Admin') >= 0;
  }

  isUser() {
    return this.roles.indexOf('User') >= 0;
  }


  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser());
  }

  logOut() {
    localStorage.removeItem('token');
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.adresseMail = undefined;
    this.roles = undefined;
  }


}
