import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //porque es un método asincrónico
import { Edu } from '../iEdu'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EduService {

  private apiUrl = 'https://portfoliobackend-ntdy.onrender.com/portfolio/educacion';

  constructor(
    private http:HttpClient
  ) { };

  getEdus(): Observable<Edu[]> {
    return this.http.get<Edu[]>(`${this.apiUrl}/traertodos`);
  };

  deleteEdu(edu:Edu): Observable<Edu>{
    const url = `${this.apiUrl}/${edu.id}`
    return this.http.delete<Edu>(url)
  }

  addEdu(edu:Edu): Observable<Edu> {
    return this.http.post<Edu>(`${this.apiUrl}/crear`, edu, httpOptions)
  }

  updateEdu(edu : Edu): Observable<Edu> {
    const url = `${this.apiUrl}/${edu.id}`
    return this.http.put<Edu>(url, edu, httpOptions)
  }
}
