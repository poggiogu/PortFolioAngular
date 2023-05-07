import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //porque es un método asincrónico
import { Iproyecto } from '../iproyecto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  private apiUrl = 'http://localhost:5000/proyectos';

  constructor(
    private http:HttpClient
  ) { };

  getProyectos(): Observable<Iproyecto[]> {
    return this.http.get<Iproyecto[]>(this.apiUrl);
  };

  deleteProyect(proyect:Iproyecto): Observable<Iproyecto>{
    const url = `${this.apiUrl}/${proyect.id}`
    return this.http.delete<Iproyecto>(url)
  }

  addProyect(proyect:Iproyecto): Observable<Iproyecto> {
    return this.http.post<Iproyecto>(this.apiUrl, proyect, httpOptions)
  }
}

