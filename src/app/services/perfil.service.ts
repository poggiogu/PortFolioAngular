import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //porque es un método asincrónico
import { iPerfil } from '../iPerfil';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiUrl = 'http://localhost:5000/perfil';

  constructor(
    private http:HttpClient
  ) { }
  
  getPerfil(): Observable<iPerfil[]> {
    return this.http.get<iPerfil[]>(this.apiUrl);
  };

  deletePerfil(perfil:iPerfil): Observable<iPerfil>{
    const url = `${this.apiUrl}/${perfil.id}`;
    return this.http.delete<iPerfil>(url);
  }

  addPerfill(perfil:iPerfil): Observable<iPerfil> {
    return this.http.post<iPerfil>(this.apiUrl, perfil, httpOptions);
  }

  updatePerfil(perfil : iPerfil): Observable<iPerfil> {
    const url = `${this.apiUrl}/${perfil.id}`
    return this.http.put<iPerfil>(url, perfil, httpOptions);
  }

}

