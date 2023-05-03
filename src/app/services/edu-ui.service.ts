import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EduUiService{
  private showAddEdu : boolean = false;
  private subjet = new Subject<any>();
  

  constructor() { };

  toggleAddEdu():void {
    console.log("ToggleAddEdu!!!");
    this.showAddEdu = !this.showAddEdu;
    this.subjet.next(this.showAddEdu);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }

}
