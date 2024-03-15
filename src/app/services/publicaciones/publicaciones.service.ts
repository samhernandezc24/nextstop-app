import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Server } from '../../libraries/server';
import { Sessions } from '../../libraries/sessions';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  
  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseUrl: string) { this.baseUrl = Server.url(); }

  index(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'publicacion-rest').pipe(
      tap(_ => console.log('fetched publicaciones')),
      catchError(this.handleError<any[]>('index', [])),
    );
  }

  details(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'publicacion-rests/' + id + '?expand=usuario').pipe(
      tap(_ => console.log('fetched publicacion con id=' + id)),
      catchError(this.handleError<any>('details id=' + id)),
    );
  }

  store(varArgs: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'publicacion-rests', varArgs, Sessions.header()).pipe(
      tap((newPublicacion: any) => console.log('added publicacion c/ id=' + newPublicacion.pub_id)),
      catchError(this.handleError<any>('store')), 
    );
  }

  update(publicacion: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'publicacion-rests', publicacion, Sessions.header()).pipe(
      tap(_ => console.log('updated publicacion id=' + publicacion.pub_id)),
      catchError(this.handleError<any>('update')),
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'publicacion-rests/' + id, Sessions.header()).pipe(
      tap(_ => console.log('deleted publicacion id=' + id)),
      catchError(this.handleError<any>('delete')),
    );
  }

  /**
   * Manejar operación HTTP que falló.
   * Dejar que la aplicación continúe.
   *
   * @param operation - nombre de la operación que ha fallado
   * @param result - valor opcional a devolver como resultado observable
   */
  private handleError<T>(operation = 'operacion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + ' fallida: ' + error.message);
      return of(result as T);
    };
  }
}
