import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Server } from '../../libraries/server';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  token: string = '100-token';
  httpHeader: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token }),
  };

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseUrl: string) { this.baseUrl = Server.url(); }

  index(): Observable<any> {
    return this.http.get(this.baseUrl + 'publicacion-rest').pipe(
      map((res: any) => {
        return res;
      }),
    );
  }

  details(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'publicacion-rests/' + id + '?expand=usuario').pipe(
      map((res: any) => {
        return res;
      }), 
    );
  }

  // postPublicacion(publicacion: Publicacion) {
  //   return this.http.post(this.baseUrl + 's', publicacion)
  //       .pipe(
  //         map((res: any) => { 
  //           return res;
  //         }),
  //         catchError(error => {
  //           return throwError(error.status || 'Error de servidor.');
  //         }), 
  //       );
  // }
}
