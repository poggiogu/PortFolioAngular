import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { ExpService } from 'src/app/services/exp.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent {
  [x: string]: any;
  @Output() onAddExp : EventEmitter<Exp> = new EventEmitter();
  text:string = "";
  dates:string = "";
  brandLogoUrl:string = "";
  cargo:string = "";
  id : number = 0;
  exps:Exp[] = [];
      
  constructor( 
    private expService : ExpService,
    private uiService:UiService
  ) { };
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor agregue una experiencia laboral!")
      return
    }
    const {text, dates, brandLogoUrl, cargo, id} = this 
    const newExp = {text, dates, brandLogoUrl, cargo, id};

    this.onAddExp.emit(newExp)

  }
}