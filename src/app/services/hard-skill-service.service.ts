import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //porque es un método asincrónico
import { iHardSkill } from '../iHardSkill';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HardSkillServiceService {

  private apiUrl = 'http://localhost:5000/hardSkills';

  constructor(
    private http:HttpClient
  ) { };

  getHardSkills(): Observable<iHardSkill[]> {
    return this.http.get<iHardSkill[]>(this.apiUrl);
  };

  deletehardSkill(hardSkill:iHardSkill): Observable<iHardSkill>{
    const url = `${this.apiUrl}/${hardSkill.id}`
    return this.http.delete<iHardSkill>(url)

  }

  addHardSkill(hardSkill:iHardSkill): Observable<iHardSkill> {
    return this.http.post<iHardSkill>(this.apiUrl, hardSkill, httpOptions)
  }
  
}
