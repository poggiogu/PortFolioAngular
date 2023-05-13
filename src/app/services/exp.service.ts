import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //porque es un método asincrónico
import { Exp } from '../iExp'; //interface
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  private apiUrl = 'http://localhost:8080/portfolio/experiencia';

  constructor(
    private http:HttpClient
  ) { };

  getExps(): Observable<Exp[]> {
    return this.http.get<Exp[]>(`${this.apiUrl}/traertodos`);
  };

  deleteExp(exp:Exp): Observable<Exp>{
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.delete<Exp>(url)

  }

  addExp(exp:Exp): Observable<Exp> {
    return this.http.post<Exp>(`${this.apiUrl}/crear`, exp, httpOptions)
  }

  updateExp(exp : Exp): Observable<Exp> {
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.put<Exp>(url, exp, httpOptions)
  }

}

