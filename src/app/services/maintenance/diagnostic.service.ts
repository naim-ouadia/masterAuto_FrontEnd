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
}
