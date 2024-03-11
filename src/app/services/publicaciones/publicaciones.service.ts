import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Server } from '../../libraries/server';
import { Sessions } from '../../libraries/sessions';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  
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

  create(varArgs: any) {
    return this.http.post(this.baseUrl + 'publicacion-rests', varArgs, Sessions.header()).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(error => {
        return throwError(error.status || 'Error de Servidor.');
      }), 
    );
  }
}
