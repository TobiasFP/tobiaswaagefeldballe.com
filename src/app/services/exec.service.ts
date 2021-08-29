import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExecService {
  constructor(private http: HttpClient) {}

  public runFortran(): Observable<any> {
    return this.http.post(environment.apiurl + 'api/runfortran', {});
  }
  public runGoLang(): Observable<any> {
    return this.http.post(environment.apiurl + 'api/rungolang', {});
  }
}
