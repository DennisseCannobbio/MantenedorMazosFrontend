import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class MazosService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json') /*  */
      .set('Access-Control-Allow-Origin', '*');
  }

  obtenerMazos(){
    return this.http.get<any>(base_url + '/mazos/getAllMazos',
    { headers: this.headers })
  }
}
