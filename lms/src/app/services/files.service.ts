import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private _http:HttpClient) { }


  uploadFiles(vals):Observable<any> {
    const data = vals;

    return this._http.post(
        'https://api.cloudinary.com/v1_1/dx0aez2fh/auto/upload',
        data,
    );
  }


  // getArchivos(files: File[]):Observable<IArchivos[]>{
  //   let archivos:IArchivos[] = [];


  //   return Observable<archivos>;


  // }
}
