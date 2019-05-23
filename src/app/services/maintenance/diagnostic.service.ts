import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {
  private host: string = 'http://localhost:8099/master_Auto';

  constructor(private http: HttpClient) {
  }

  getAllDiagnostic() {
    return this.http.get(this.host + '/maintenance/AllDiagnostic');
  }

  deleteDiagnostic(id) {
    return this.http.delete(this.host + '/maintenance/DeleteDiagnostic/' + id);
  }

  saveDiagnostic(data) {
    return this.http.post(this.host + '/maintenance/createDiagnostic', data);
  }
  getElementDiagnostic(id) {
    return this.http.get(this.host + '/maintenance/getDiagnostic/' + id);
  }

  updateElementDiagnostic(id, data) {
    return this.http.put(this.host + '/maintenance/diagnostic/' + id, data);
  }

}
