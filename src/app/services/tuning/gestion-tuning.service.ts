import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionTuningService {

  private host: string = 'http://localhost:8099/master_Auto/Tuning';

  constructor(private http: HttpClient) {
  }

  getAllTuning() {
    return this.http.get(this.host + '/getAllTuning');
  }
}
