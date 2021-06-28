import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPresentaciones} from '../interfaces/presentaciones';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PresentacionesService {
  public presentaciones: IPresentaciones[] = []
  constructor(private http: HttpClient) {

  }

  getPresentaciones() {
    return this.http.get<IPresentaciones[]>('/assets/presentaciones.json')
        .pipe(
            map((presentaciones) =>{
              return presentaciones;
            }),
        );
  }
}
