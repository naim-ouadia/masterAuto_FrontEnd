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
    this.adresseMail = objJwt.sub;
    return this.adresseMail;
  }

  getUser() {
    return this.http.get(this.host + '/adresseMail/' + this.loadUser());
  }

  getAllUser() {
    return this.http.get(this.host + '/findAllUser');
  }

  updateUser(id, data) {
    return this.http.put(this.host + '/upDateUser/' + id, data);
  }

  deletUser(id) {
    return this.http.delete(this.host + '/deleteUser/' + id);
  }

  activetedUser(id) {
    return this.http.get(this.host + '/activatedClient/' + id);
  }

  desactivetedUser(id) {
    return this.http.get(this.host + '/blockedClient/' + id);
  }

}
