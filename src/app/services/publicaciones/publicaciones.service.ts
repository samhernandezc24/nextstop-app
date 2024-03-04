import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) { }

  getPublicaciones() {
    return this.http.get("http://nextstop-backend.test/publicacion-rest").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
