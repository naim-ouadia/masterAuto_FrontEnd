import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {InfosService} from './infos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  host2: string = 'http://localhost:8099';
  jwt: string;
  adresseMail: string;
  roles: Array<string>;
  user;
  errorAuth;

  constructor(private http: HttpClient, private router: Router, private infos: InfosService) {
  }

  login(data) {
    if (data.adresseMail !== '' && data.password !== '') {
      this.http.post(this.host2 + '/login', data, {observe: 'response'}).subscribe(resp => {
        let jwt = resp.headers.get('Authorization');
        this.saveToken(jwt);
        this.router.navigateByUrl('Accueil');
        this.loadNameUser();
      });
    } else {
      this.errorAuth = 'login ou mot de passe est incorrect';
    }

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

  isTechnicien() {
    return this.roles.indexOf('Technicien') >= 0;
  }

  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser() || this.isTechnicien());
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

  loadNameUser() {
    this.infos.getUser().subscribe(data => {
      this.user = data;
    }, err => {
      console.log('error');
    });
  }

  redirectToCompte() {
    if (this.isUser()) {
      this.router.navigateByUrl('ParametreCompte');
    } else if (this.isAdmin()) {
      this.router.navigateByUrl('AdminDashboard');
    } else if (this.isTechnicien()) {
      this.router.navigateByUrl('Technicien/Dashboard');
    }
  }


}
