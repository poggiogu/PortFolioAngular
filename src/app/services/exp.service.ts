import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //porque es un método asincrónico
import { Exp } from '../Exp'; //interface
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
  private apiUrl = 'http://localhost:5000/exps';

  constructor(
    private http:HttpClient
  ) { };

  getExps(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.apiUrl);
  };

  deleteExp(exp:Exp): Observable<Exp>{
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.delete<Exp>(url)

  }

  addExp(exp:Exp): Observable<Exp> {
    return this.http.post<Exp>(this.apiUrl, exp, httpOptions)
  }
}