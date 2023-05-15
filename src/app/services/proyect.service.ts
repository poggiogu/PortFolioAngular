import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //porque es un método asincrónico
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

  private apiUrl = 'https://portfoliobackend-ntdy.onrender.com/portfolio/proyectos';

  constructor(
    private http:HttpClient
  ) { }

  getProyectos(): Observable<Iproyecto[]> {
    return this.http.get<Iproyecto[]>(`${this.apiUrl}/traertodos`);
  }

  getProyect(proyect:Iproyecto):Observable<Iproyecto> {
    const url = `${this.apiUrl}/${proyect.id}`
    return this.http.get<Iproyecto>(url)
  }

  deleteProyect(proyect:Iproyecto): Observable<Iproyecto>{
    const url = `${this.apiUrl}/${proyect.id}`
    return this.http.delete<Iproyecto>(url)
  }

  addProyect(proyect:Iproyecto): Observable<Iproyecto> {
    return this.http.post<Iproyecto>(`${this.apiUrl}/crear`, proyect, httpOptions);
  }

  updateProyect(proyect : Iproyecto): Observable<Iproyecto> {
    const url = `${this.apiUrl}/${proyect.id}`
    return this.http.put<Iproyecto>(url, proyect, httpOptions)
  }
  
}