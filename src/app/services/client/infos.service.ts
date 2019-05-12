import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  private host: string = 'http://localhost:8099/master_Auto/users';

  constructor(private http: HttpClient) {
  }

  loadUser() {
    console.log('naim' + this.http.get(this.host + '/adresseMail/ouadia@gamil.com'));
    // return this.http.get(this.host + '/adresseMail/ouadia@gamil.com');
  }
}
