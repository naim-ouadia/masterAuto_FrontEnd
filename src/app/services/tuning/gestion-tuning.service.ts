import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


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

  //observable c'est pour attendre le fichier se telecharger (synchron)//
  upLoadData(file: File, id): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host + '/uploadPhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  addTuning(data) {
    return this.http.post(this.host + '/creatTuning', data);
  }

  getTuning(id) {
    return this.http.get(this.host + '/tuningById/' + id);
  }

  updateTuning(id, data) {
    return this.http.put(this.host + '/updateTuning/' + id, data);
  }

  deleteTuning(id) {
    return this.http.delete(this.host + '/deleteTuning/' + id);
  }
}
