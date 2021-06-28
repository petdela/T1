import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrabajo} from '../interfaces/trabajo.interface';
@Injectable({
  providedIn: 'root',
})
export class TrabajoService {
  constructor(private _http:HttpClient) { }

  postTrabajo(data:any):Observable<ITrabajo> {
    return this._http.post<ITrabajo>(
        'http://localhost:3000/trabajos/',
        data,
    );
  }

  getTrabajo(id:string):Observable<ITrabajo> {
    return this._http.get<ITrabajo>(
        `http://localhost:3000/trabajos/${id}`,
    );
  }
}
