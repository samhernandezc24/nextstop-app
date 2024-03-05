import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Publicacion {
  pub_id: number;
  pub_titulo: string;
  pub_descripcion: string;
  pub_createdfecha: Date;
  pub_updatedfecha: Date;
  pub_fkusuario: number;
  pub_fklugar: number;
}

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  baseUrl: string = 'http://nextstop-backend.test/publicacion-rest';
  token: string = '100-token';
  httpHeader: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token }),
  };

  constructor(private http: HttpClient) { }

  getPublicaciones() {
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPublicacionDetails(id: string) {
    console.log(id);
    return this.http.get(this.baseUrl + 's/' + id + "?expand=usuario").pipe(
      map((res: any) => {
        return res;
      }), 
    );
  }

  postPublicacion(publicacion: Publicacion) {
    return this.http.post(this.baseUrl + 's', publicacion)
        .pipe(
          map((res: any) => { 
            return res;
          }),
          catchError(error => {
            return throwError(error.status || 'Error de servidor.');
          }), 
        );
  }
}
