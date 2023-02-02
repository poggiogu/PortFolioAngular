import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddExp : boolean = false;
  private subjet = new Subject<any>();

  constructor() { };

  toggleAddExp():void {
    console.log("ToggleAddExp!!!");
    this.showAddExp = !this.showAddExp;
    this.subjet.next(this.showAddExp);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}

