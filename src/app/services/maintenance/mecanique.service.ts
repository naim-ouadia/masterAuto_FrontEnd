import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MecaniqueService {
  private host: string = 'http://localhost:8099/master_Auto';

  constructor(private http: HttpClient) {
  }

  getAllMecanique() {
    return this.http.get(this.host + '/maintenance/AllMecanique');
  }

  deleteMecanique(id) {
    return this.http.delete(this.host + '/maintenance/DeleteMecanique/' + id);
  }

  saveMecanique(data) {
    return this.http.post(this.host + '/maintenance/createMecanique', data);
  }

  getElement(id) {
    return this.http.get(this.host + '/maintenance/getMecanique/' + id);
  }

  updateElement(id, data) {
    return this.http.put(this.host + '/maintenance/mecanique/' + id, data);
  }


}
