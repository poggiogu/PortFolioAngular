import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//Servicio de user interface
export class ProyectUiService{
  private showAddProyect : boolean = false;
  private subjet = new Subject<any>();
  

  constructor() { };

  toggleAddProyect():void {
    console.log("ToggleAddProyect!!!");
    this.showAddProyect = !this.showAddProyect;
    this.subjet.next(this.showAddProyect);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }

}
